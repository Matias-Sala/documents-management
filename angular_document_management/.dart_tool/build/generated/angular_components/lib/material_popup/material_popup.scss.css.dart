library asset_angular_components_lib_material_popup_material_popup.scss.css.dart;


final List<dynamic> styles = ['.shadow {\n  background: #fff;\n  border-radius: 2px;\n  transition: transform 150ms cubic-bezier(0.4, 0, 1, 1);\n  /*! @noflip */\n  transform-origin: top left;\n  transform: scale3d(0, 0, 1);\n  will-change: transform;\n}\n.shadow[animated] {\n  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.shadow[elevation="1"] {\n  /*! @noflip */\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.shadow[elevation="2"] {\n  /*! @noflip */\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n}\n.shadow[elevation="3"] {\n  /*! @noflip */\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\n}\n.shadow[elevation="4"] {\n  /*! @noflip */\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n.shadow[elevation="5"] {\n  /*! @noflip */\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.shadow[elevation="6"] {\n  /*! @noflip */\n  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n}\n.shadow[slide=x] {\n  /*! @noflip */\n  transform: scale3d(0, 1, 1);\n}\n.shadow[slide=y] {\n  /*! @noflip */\n  transform: scale3d(1, 0, 1);\n}\n.shadow.visible {\n  transition: transform 150ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(1, 1, 1);\n}\n.shadow.ink {\n  background: #616161;\n  color: #fff;\n}\n.shadow.full-width {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: auto;\n}\n.shadow .popup {\n  border-radius: 2px;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: auto;\n  overflow: hidden;\n  transition: inherit;\n}\n.shadow.visible .popup {\n  visibility: initial;\n}\n.shadow header,\n.shadow footer {\n  display: block;\n}\n.shadow .main {\n  display: flex;\n  flex-direction: column;\n  min-height: inherit;\n  min-width: inherit;\n  max-height: inherit;\n  max-width: inherit;\n  overflow: auto;\n  overscroll-behavior: contain;\n}\n\n:host {\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n:host ::ng-deep ::-webkit-scrollbar {\n  background-color: rgba(0, 0, 0, 0);\n  height: 4px;\n  width: 4px;\n}\n:host ::ng-deep ::-webkit-scrollbar:hover {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n:host ::ng-deep ::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.26);\n  min-height: 48px;\n  min-width: 48px;\n}\n:host ::ng-deep ::-webkit-scrollbar-thumb:hover {\n  background-color: #4285f4;\n}\n:host ::ng-deep ::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n}\n\n.material-popup-content {\n  min-width: inherit;\n  min-height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.popup-wrapper {\n  width: 100%;\n}\n'];
