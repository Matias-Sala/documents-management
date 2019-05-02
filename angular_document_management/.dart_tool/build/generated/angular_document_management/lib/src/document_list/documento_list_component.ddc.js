define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/common_sales_management/common_sales_managemnet'], function(dart_sdk, change_detection, common_sales_managemnet) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__repositories__documentos_repo = common_sales_managemnet.src__repositories__documentos_repo;
  const src__models__factura = common_sales_managemnet.src__models__factura;
  const src__blocs__states__documentos_state = common_sales_managemnet.src__blocs__states__documentos_state;
  const src__blocs__documentos_bloc = common_sales_managemnet.src__blocs__documentos_bloc;
  const src__blocs__events__documentos_events = common_sales_managemnet.src__blocs__events__documentos_events;
  const _root = Object.create(null);
  const src__todo_list__todo_list_service = Object.create(_root);
  const src__todo_list__todo_list_component = Object.create(_root);
  const src__document_list__documento_list_component = Object.create(_root);
  const $add = dartx.add;
  const $removeAt = dartx.removeAt;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let JSArrayOfFactura = () => (JSArrayOfFactura = dart.constFn(_interceptors.JSArray$(src__models__factura.Factura)))();
  let DocumentosSearchStateToNull = () => (DocumentosSearchStateToNull = dart.constFn(dart.fnType(core.Null, [src__blocs__states__documentos_state.DocumentosSearchState])))();
  src__todo_list__todo_list_service.TodoListService = class TodoListService extends core.Object {
    get mockTodoList() {
      return this[mockTodoList];
    }
    set mockTodoList(value) {
      this[mockTodoList] = value;
    }
    getTodoList() {
      return async.async(ListOfString(), (function* getTodoList() {
        return this.mockTodoList;
      }).bind(this));
    }
  };
  (src__todo_list__todo_list_service.TodoListService.new = function() {
    this[mockTodoList] = JSArrayOfString().of([]);
  }).prototype = src__todo_list__todo_list_service.TodoListService.prototype;
  dart.addTypeTests(src__todo_list__todo_list_service.TodoListService);
  const mockTodoList = Symbol("TodoListService.mockTodoList");
  dart.setMethodSignature(src__todo_list__todo_list_service.TodoListService, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_service.TodoListService.__proto__),
    getTodoList: dart.fnType(async.Future$(core.List$(core.String)), [])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_service.TodoListService, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_service.TodoListService.__proto__),
    mockTodoList: dart.fieldType(ListOfString())
  }));
  src__todo_list__todo_list_component.TodoListComponent = class TodoListComponent extends core.Object {
    get todoListService() {
      return this[todoListService$];
    }
    set todoListService(value) {
      super.todoListService = value;
    }
    get items() {
      return this[items];
    }
    set items(value) {
      this[items] = value;
    }
    get newTodo() {
      return this[newTodo];
    }
    set newTodo(value) {
      this[newTodo] = value;
    }
    ngOnInit() {
      return async.async(core.Null, (function* ngOnInit() {
        this.items = (yield this.todoListService.getTodoList());
      }).bind(this));
    }
    add() {
      this.items[$add](this.newTodo);
      this.newTodo = "";
    }
    remove(index) {
      return this.items[$removeAt](index);
    }
  };
  (src__todo_list__todo_list_component.TodoListComponent.new = function(todoListService) {
    this[items] = JSArrayOfString().of([]);
    this[newTodo] = "";
    this[todoListService$] = todoListService;
  }).prototype = src__todo_list__todo_list_component.TodoListComponent.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component.TodoListComponent);
  const todoListService$ = Symbol("TodoListComponent.todoListService");
  const items = Symbol("TodoListComponent.items");
  const newTodo = Symbol("TodoListComponent.newTodo");
  src__todo_list__todo_list_component.TodoListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__todo_list__todo_list_component.TodoListComponent, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component.TodoListComponent.__proto__),
    ngOnInit: dart.fnType(async.Future$(core.Null), []),
    add: dart.fnType(dart.void, []),
    remove: dart.fnType(core.String, [core.int])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component.TodoListComponent, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component.TodoListComponent.__proto__),
    todoListService: dart.finalFieldType(src__todo_list__todo_list_service.TodoListService),
    items: dart.fieldType(ListOfString()),
    newTodo: dart.fieldType(core.String)
  }));
  src__document_list__documento_list_component.DocumentoListComponent = class DocumentoListComponent extends core.Object {
    get docSearchBloc() {
      return this[docSearchBloc];
    }
    set docSearchBloc(value) {
      this[docSearchBloc] = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      this[state] = value;
    }
    get myOptions() {
      return this[myOptions];
    }
    set myOptions(value) {
      super.myOptions = value;
    }
    get myInput() {
      return this[myInput];
    }
    set myInput(value) {
      this[myInput] = value;
    }
    ngOnInit() {
      let docRecpo = new src__repositories__documentos_repo.DocumentosRepo.new();
      this.state = new src__blocs__states__documentos_state.SearchStateSuccess.new(JSArrayOfFactura().of([]));
      this.docSearchBloc = new src__blocs__documentos_bloc.DocumentosSearchBloc.new({documentosRepo: docRecpo});
      this.docSearchBloc.dispatch(new src__blocs__events__documentos_events.TextChanged.new({text: "1"}));
      this.docSearchBloc.state.listen(dart.fn(s => {
        if (src__blocs__states__documentos_state.SearchStateSuccess.is(s)) {
          this.state = s;
        }
      }, DocumentosSearchStateToNull()));
    }
    ngOnDestroy() {
      this.docSearchBloc.dispose();
    }
  };
  (src__document_list__documento_list_component.DocumentoListComponent.new = function() {
    this[docSearchBloc] = null;
    this[state] = null;
    this[myOptions] = JSArrayOfString().of(["Foo", "Bar", "Baz"]);
    this[myInput] = "Bar";
  }).prototype = src__document_list__documento_list_component.DocumentoListComponent.prototype;
  dart.addTypeTests(src__document_list__documento_list_component.DocumentoListComponent);
  const docSearchBloc = Symbol("DocumentoListComponent.docSearchBloc");
  const state = Symbol("DocumentoListComponent.state");
  const myOptions = Symbol("DocumentoListComponent.myOptions");
  const myInput = Symbol("DocumentoListComponent.myInput");
  src__document_list__documento_list_component.DocumentoListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__document_list__documento_list_component.DocumentoListComponent, () => ({
    __proto__: dart.getMethods(src__document_list__documento_list_component.DocumentoListComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__document_list__documento_list_component.DocumentoListComponent, () => ({
    __proto__: dart.getFields(src__document_list__documento_list_component.DocumentoListComponent.__proto__),
    docSearchBloc: dart.fieldType(src__blocs__documentos_bloc.DocumentosSearchBloc),
    state: dart.fieldType(src__blocs__states__documentos_state.SearchStateSuccess),
    myOptions: dart.finalFieldType(ListOfString()),
    myInput: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_document_management/src/document_list/documento_list_component.ddc", {
    "package:angular_document_management/src/todo_list/todo_list_service.dart": src__todo_list__todo_list_service,
    "package:angular_document_management/src/todo_list/todo_list_component.dart": src__todo_list__todo_list_component,
    "package:angular_document_management/src/document_list/documento_list_component.dart": src__document_list__documento_list_component
  }, '{"version":3,"sourceRoot":"","sources":["../todo_list/todo_list_service.dart","../todo_list/todo_list_component.dart","documento_list_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;IAOe;;;;;;;AAEsB;cAAS,kBAAY;;;;;IAF3C,kBAAY,GAAG;EAG9B;;;;;;;;;;;;ICYwB;;;;;;IAET;;;;;;IACN;;;;;;;AAKiB;AACtB,kBAAK,IAAG,MAAM,oBAAe,YAAY;MAC3C;;;AAGE,gBAAK,MAAI,CAAC,YAAO;AACjB,kBAAO,GAAG;IACZ;WAEc,KAAS;YAAK,WAAK,WAAS,CAAC,KAAK;IAAC;;wEAZ/B,eAAoB;IAHzB,WAAK,GAAG;IACd,aAAO,GAAG;IAEM,sBAAe,GAAf,eAAe;EAAC;;;;;;;;;;;;;;;;;;;ICalB;;;;;;IACF;;;;;;IAEb;;;;;;IACC;;;;;;;AAIL,UAAM,eAAW,qDAAc;AAC/B,gBAAK,OAAG,2DAAkB,CAAC;AAE3B,wBAAa,OAAG,oDAAoB,kBAClB,QAAQ;AAE1B,wBAAa,SAAS,KAAC,qDAAW,QAAO;AAEzC,wBAAa,MAAM,OAAO,CAAC,QAAC,CAAC;AAC3B,uEAAI,CAAC,GAAwB;AAC3B,oBAAK,GAAG,CAAC;;;IAGf;;AAIE,wBAAa,QAAQ;IACvB;;;IA1BqB,mBAAa;IACf,WAAK;IAElB,eAAS,GAAG,sBAAC,OAAO,OAAO;IAC1B,aAAO,GAAG;EAuBnB","file":"documento_list_component.ddc.js"}');
  // Exports:
  return {
    src__todo_list__todo_list_service: src__todo_list__todo_list_service,
    src__todo_list__todo_list_component: src__todo_list__todo_list_component,
    src__document_list__documento_list_component: src__document_list__documento_list_component
  };
});

//# sourceMappingURL=documento_list_component.ddc.js.map
