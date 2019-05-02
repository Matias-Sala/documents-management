library asset_angular_components_lib_material_toggle_material_toggle.scss.css.dart;


final List<dynamic> styles = [':host {\n  display: inline-block;\n  text-align: initial;\n}\n\n.material-toggle {\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n  cursor: pointer;\n  outline: none;\n  width: 100%;\n}\n\n.material-toggle.disabled {\n  pointer-events: none;\n}\n\n.tgl-container {\n  display: inline-block;\n  min-width: 36px;\n  position: relative;\n  vertical-align: middle;\n  width: 36px;\n}\n\n.tgl-bar {\n  transition: background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: opacity 130ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: rgba(0, 0, 0, 0.26);\n  border-radius: 8px;\n  height: 14px;\n  margin: 2px 0;\n  width: 100%;\n}\n.tgl-bar[animated] {\n  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.tgl-bar[elevation="1"] {\n  /*! @noflip */\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.tgl-bar[elevation="2"] {\n  /*! @noflip */\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n}\n.tgl-bar[elevation="3"] {\n  /*! @noflip */\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\n}\n.tgl-bar[elevation="4"] {\n  /*! @noflip */\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n.tgl-bar[elevation="5"] {\n  /*! @noflip */\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.tgl-bar[elevation="6"] {\n  /*! @noflip */\n  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n}\n\n.material-toggle.checked:not(.disabled) .tgl-bar {\n  background-color: #009688;\n  opacity: 0.5;\n}\n\n.tgl-btn-container {\n  display: inline-flex;\n  justify-content: flex-end;\n  transition: width 130ms cubic-bezier(0.4, 0, 0.2, 1);\n  margin-top: -2px;\n  position: absolute;\n  top: 0;\n  width: 20px;\n}\n\n.material-toggle.checked .tgl-btn-container {\n  width: 36px;\n}\n\n.tgl-btn {\n  transition: background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #fafafa;\n  border-radius: 50%;\n  height: 20px;\n  position: relative;\n  width: 20px;\n}\n.tgl-btn[animated] {\n  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.tgl-btn[elevation="1"] {\n  /*! @noflip */\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.tgl-btn[elevation="2"] {\n  /*! @noflip */\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n}\n.tgl-btn[elevation="3"] {\n  /*! @noflip */\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\n}\n.tgl-btn[elevation="4"] {\n  /*! @noflip */\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n.tgl-btn[elevation="5"] {\n  /*! @noflip */\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.tgl-btn[elevation="6"] {\n  /*! @noflip */\n  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n}\n\n.material-toggle.checked .tgl-btn {\n  background-color: #009688;\n}\n\n.tgl-lbl {\n  flex-grow: 1;\n  display: inline-block;\n  padding: 2px 8px 2px 0;\n  position: relative;\n  vertical-align: middle;\n  white-space: normal;\n}\n\n.material-toggle.disabled .tgl-lbl {\n  opacity: 0.54;\n}\n\n.material-toggle.disabled .tgl-btn,\n.material-toggle.checked.disabled .tgl-btn {\n  background-color: #bdbdbd;\n}\n\n.material-toggle.disabled .tgl-bar,\n.material-toggle.checked.disabled .tgl-bar {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n'];
