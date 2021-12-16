/*
Copyright (C) NAVER corp.  

This library is free software; you can redistribute it and/or  
modify it under the terms of the GNU Lesser General Public  
License as published by the Free Software Foundation; either  
version 2.1 of the License, or (at your option) any later version.  

This library is distributed in the hope that it will be useful,  
but WITHOUT ANY WARRANTY; without even the implied warranty of  
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU  
Lesser General Public License for more details.  

You should have received a copy of the GNU Lesser General Public  
License along with this library; if not, write to the Free Software  
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA  
*/
window.createSEditor2 = function(elIRField, htParams, elSeAppContainer){
	if(!window.$Jindo){
		parent.document.body.innerHTML="jindo 라이브러리가 필요합니다.<br>\n<a href='https://github.com/naver/jindojs-jindo'>https://github.com/naver/jindojs-jindo</a>에서 스크립트파일을 다운로드 받아 임포트해주세요.";
		return;
	}

	var elAppContainer = (elSeAppContainer || jindo.$("smart_editor2"));	
	var elEditingArea = jindo.$$.getSingle("DIV.husky_seditor_editing_area_container", elAppContainer);
	var oWYSIWYGIFrame = jindo.$$.getSingle("IFRAME.se2_input_wysiwyg", elEditingArea);
	var oIRTextarea = elIRField?elIRField:jindo.$$.getSingle("TEXTAREA.blind", elEditingArea);
	var oHTMLSrc = jindo.$$.getSingle("TEXTAREA.se2_input_htmlsrc", elEditingArea);
	var oTextArea = jindo.$$.getSingle("TEXTAREA.se2_input_text", elEditingArea);
	
	if(!htParams){ 
		htParams = {}; 
		htParams.fOnBeforeUnload = null;
	}
	htParams.elAppContainer = elAppContainer;												// 에디터 UI 최상위 element 셋팅 
	htParams.oNavigator = jindo.$Agent().navigator();										// navigator 객체 셋팅
	htParams.I18N_LOCALE = htParams.I18N_LOCALE || "ko_KR";

	var oEditor = new nhn.husky.HuskyCore(htParams);
	oEditor.registerPlugin(new nhn.husky.CorePlugin(htParams?htParams.fOnAppLoad:null));	
	oEditor.registerPlugin(new nhn.husky.StringConverterManager());
	if(htParams.bSkipXssFilter !== true){
		// 보안 필터링 플러그인 (TODO:소스분리 및 블랙리스트 옵션 추가)
		oEditor.registerPlugin({
			_rxFilter:/<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|i(?:frame|layer)|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|title|xml)[^>]*?>/gi,
			$ON_REGISTER_CONVERTERS : function() {
				var fXssFilter = jindo.$Fn(function(sHtml){
					return sHtml.replace(this._rxFilter, "");
				}, this).bind();
				this.oApp.exec("ADD_CONVERTER",["HTMLSrc_TO_IR", fXssFilter]);
				this.oApp.exec("ADD_CONVERTER",["IR_TO_DB", fXssFilter]);
			}
		});
	}

	var htDimension = {
		nMinHeight:205,
		nMinWidth:parseInt(elIRField.style.minWidth, 10)||570,
		nHeight:elIRField.style.height||elIRField.offsetHeight,
		nWidth:elIRField.style.width||elIRField.offsetWidth
	};
	
	var htConversionMode = {
		bUseVerticalResizer : htParams.bUseVerticalResizer,
		bUseModeChanger : htParams.bUseModeChanger
	};
	
	var aAdditionalFontList = htParams.aAdditionalFontList;
	
	oEditor.registerPlugin(new nhn.husky.SE_EditingAreaManager("WYSIWYG", oIRTextarea, htDimension,  htParams.fOnBeforeUnload, elAppContainer));
	oEditor.registerPlugin(new nhn.husky.SE_EditingArea_WYSIWYG(oWYSIWYGIFrame));			// Tab Editor 모드
	oEditor.registerPlugin(new nhn.husky.SE_EditingArea_HTMLSrc(oHTMLSrc));					// Tab HTML 모드
	oEditor.registerPlugin(new nhn.husky.SE_EditingArea_TEXT(oTextArea));					// Tab Text 모드
	oEditor.registerPlugin(new nhn.husky.SE2M_EditingModeChanger(elAppContainer, htConversionMode));	// 모드간 변경(Editor, HTML, Text)
	oEditor.registerPlugin(new nhn.husky.SE_PasteHandler()); 								// WYSIWYG Paste Handler
	
	oEditor.registerPlugin(new nhn.husky.HuskyRangeManager(oWYSIWYGIFrame));
	oEditor.registerPlugin(new nhn.husky.Utils());
	oEditor.registerPlugin(new nhn.husky.SE2M_UtilPlugin());
	oEditor.registerPlugin(new nhn.husky.SE_WYSIWYGStyler());
	oEditor.registerPlugin(new nhn.husky.SE2M_Toolbar(elAppContainer));
	
	oEditor.registerPlugin(new nhn.husky.Hotkey());											// 단축키
	oEditor.registerPlugin(new nhn.husky.SE_EditingAreaVerticalResizer(elAppContainer, htConversionMode));	// 편집영역 리사이즈
	oEditor.registerPlugin(new nhn.husky.DialogLayerManager());
	oEditor.registerPlugin(new nhn.husky.ActiveLayerManager());
	oEditor.registerPlugin(new nhn.husky.SE_WYSIWYGStyleGetter());							// 커서 위치 스타일 정보 가져오기

	oEditor.registerPlugin(new nhn.husky.SE_WYSIWYGEnterKey("P"));							// 엔터 시 처리, 현재는 P로 처리
	
	oEditor.registerPlugin(new nhn.husky.SE2M_ColorPalette(elAppContainer));				// 색상 팔레트
	oEditor.registerPlugin(new nhn.husky.SE2M_FontColor(elAppContainer));					// 글자색
	oEditor.registerPlugin(new nhn.husky.SE2M_BGColor(elAppContainer));						// 글자배경색
	oEditor.registerPlugin(new nhn.husky.SE2M_FontNameWithLayerUI(elAppContainer, aAdditionalFontList));	// 글꼴종류
	oEditor.registerPlugin(new nhn.husky.SE2M_FontSizeWithLayerUI(elAppContainer));			// 글꼴크기
	
	oEditor.registerPlugin(new nhn.husky.SE2M_LineStyler());								 
	oEditor.registerPlugin(new nhn.husky.SE2M_ExecCommand(oWYSIWYGIFrame));
	oEditor.registerPlugin(new nhn.husky.SE2M_LineHeightWithLayerUI(elAppContainer));		// 줄간격	

	oEditor.registerPlugin(new nhn.husky.SE2M_Quote(elAppContainer));						// 인용구
	oEditor.registerPlugin(new nhn.husky.SE2M_Hyperlink(elAppContainer));					// 링크
	oEditor.registerPlugin(new nhn.husky.SE2M_SCharacter(elAppContainer));					// 특수문자
	oEditor.registerPlugin(new nhn.husky.SE2M_FindReplacePlugin(elAppContainer));			// 찾기/바꾸기
	oEditor.registerPlugin(new nhn.husky.SE2M_TableCreator(elAppContainer));				// 테이블 생성
	oEditor.registerPlugin(new nhn.husky.SE2M_TableEditor(elAppContainer));					// 테이블 편집
	oEditor.registerPlugin(new nhn.husky.SE2M_TableBlockStyler(elAppContainer));			// 테이블 스타일
	if(nhn.husky.SE2M_AttachQuickPhoto){
		oEditor.registerPlugin(new nhn.husky.SE2M_AttachQuickPhoto(elAppContainer));			// 사진			
	}

	oEditor.registerPlugin(new nhn.husky.MessageManager(oMessageMap, htParams.I18N_LOCALE));
	oEditor.registerPlugin(new nhn.husky.SE2M_QuickEditor_Common(elAppContainer));			// 퀵에디터 공통(표, 이미지)
	
	oEditor.registerPlugin(new nhn.husky.SE2B_CSSLoader());									// CSS lazy load
	if(window.frameElement){
		oEditor.registerPlugin(new nhn.husky.SE_OuterIFrameControl(elAppContainer, 100));
	}
	
	oEditor.registerPlugin(new nhn.husky.SE_ToolbarToggler(elAppContainer, htParams.bUseToolbar));
	oEditor.registerPlugin(new nhn.husky.SE2M_Accessibility(elAppContainer, htParams.I18N_LOCALE));	// 에디터내의 웹접근성 관련 기능모음 플러그인 
	
	return oEditor;
};