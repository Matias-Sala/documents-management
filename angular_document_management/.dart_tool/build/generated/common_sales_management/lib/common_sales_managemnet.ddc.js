define(['dart_sdk', 'packages/rxdart/futures', 'packages/bloc/bloc', 'packages/equatable/equatable', 'packages/http/src/base_client'], function(dart_sdk, futures, bloc, equatable, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__observables__observable = futures.src__observables__observable;
  const src__transition = bloc.src__transition;
  const src__bloc = bloc.src__bloc;
  const src__equatable = equatable.src__equatable;
  const src__client = base_client.src__client;
  const _root = Object.create(null);
  const src__blocs__documentos_bloc = Object.create(_root);
  const src__ventas_client = Object.create(_root);
  const src__models__order_result = Object.create(_root);
  const src__models__order = Object.create(_root);
  const common_sales_managemnet = Object.create(_root);
  const src__models__order_item = Object.create(_root);
  const src__models__order_result_error = Object.create(_root);
  const src__models__activity = Object.create(_root);
  const src__models__deposito = Object.create(_root);
  const src__models__nota_credito = Object.create(_root);
  const src__models__cheque = Object.create(_root);
  const src__models__adelanto = Object.create(_root);
  const src__models__factura = Object.create(_root);
  const src__models__search_result_error = Object.create(_root);
  const src__models__recibo = Object.create(_root);
  const src__models__models = Object.create(_root);
  const src__models__mocks__mocks = Object.create(_root);
  const src__services__documentos_api_service = Object.create(_root);
  const src__services__ventas_api_service = Object.create(_root);
  const src__services__services = Object.create(_root);
  const src__repositories__ventas_repo = Object.create(_root);
  const src__repositories__documentos_repo = Object.create(_root);
  const src__blocs__events__documentos_events = Object.create(_root);
  const src__blocs__states__documentos_state = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $length = dartx.length;
  let StreamOfDocumentosSearchEvent = () => (StreamOfDocumentosSearchEvent = dart.constFn(async.Stream$(src__blocs__events__documentos_events.DocumentosSearchEvent)))();
  let StreamOfDocumentosSearchState = () => (StreamOfDocumentosSearchState = dart.constFn(async.Stream$(src__blocs__states__documentos_state.DocumentosSearchState)))();
  let DocumentosSearchEventToStreamOfDocumentosSearchState = () => (DocumentosSearchEventToStreamOfDocumentosSearchState = dart.constFn(dart.fnType(StreamOfDocumentosSearchState(), [src__blocs__events__documentos_events.DocumentosSearchEvent])))();
  let ObservableOfDocumentosSearchEvent = () => (ObservableOfDocumentosSearchEvent = dart.constFn(src__observables__observable.Observable$(src__blocs__events__documentos_events.DocumentosSearchEvent)))();
  let TransitionOfDocumentosSearchEvent$DocumentosSearchState = () => (TransitionOfDocumentosSearchEvent$DocumentosSearchState = dart.constFn(src__transition.Transition$(src__blocs__events__documentos_events.DocumentosSearchEvent, src__blocs__states__documentos_state.DocumentosSearchState)))();
  let _AsyncStarImplOfDocumentosSearchState = () => (_AsyncStarImplOfDocumentosSearchState = dart.constFn(async._AsyncStarImpl$(src__blocs__states__documentos_state.DocumentosSearchState)))();
  let FutureOfOrderResult = () => (FutureOfOrderResult = dart.constFn(async.Future$(src__models__order_result.OrderResult)))();
  let JSArrayOfActivity = () => (JSArrayOfActivity = dart.constFn(_interceptors.JSArray$(src__models__activity.Activity)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicToOrder = () => (dynamicToOrder = dart.constFn(dart.fnType(src__models__order.Order, [dart.dynamic])))();
  let IterableOfOrder = () => (IterableOfOrder = dart.constFn(core.Iterable$(src__models__order.Order)))();
  let ListOfOrder = () => (ListOfOrder = dart.constFn(core.List$(src__models__order.Order)))();
  let dynamicToOrderItem = () => (dynamicToOrderItem = dart.constFn(dart.fnType(src__models__order_item.OrderItem, [dart.dynamic])))();
  let IterableOfOrderItem = () => (IterableOfOrderItem = dart.constFn(core.Iterable$(src__models__order_item.OrderItem)))();
  let ListOfOrderItem = () => (ListOfOrderItem = dart.constFn(core.List$(src__models__order_item.OrderItem)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ListOfDeposito = () => (ListOfDeposito = dart.constFn(core.List$(src__models__deposito.Deposito)))();
  let ListOfCheque = () => (ListOfCheque = dart.constFn(core.List$(src__models__cheque.Cheque)))();
  let ListOfNotaCredito = () => (ListOfNotaCredito = dart.constFn(core.List$(src__models__nota_credito.NotaCredito)))();
  let ListOfAdelanto = () => (ListOfAdelanto = dart.constFn(core.List$(src__models__adelanto.Adelanto)))();
  let dynamicToDeposito = () => (dynamicToDeposito = dart.constFn(dart.fnType(src__models__deposito.Deposito, [dart.dynamic])))();
  let IterableOfDeposito = () => (IterableOfDeposito = dart.constFn(core.Iterable$(src__models__deposito.Deposito)))();
  let dynamicToCheque = () => (dynamicToCheque = dart.constFn(dart.fnType(src__models__cheque.Cheque, [dart.dynamic])))();
  let IterableOfCheque = () => (IterableOfCheque = dart.constFn(core.Iterable$(src__models__cheque.Cheque)))();
  let dynamicToNotaCredito = () => (dynamicToNotaCredito = dart.constFn(dart.fnType(src__models__nota_credito.NotaCredito, [dart.dynamic])))();
  let IterableOfNotaCredito = () => (IterableOfNotaCredito = dart.constFn(core.Iterable$(src__models__nota_credito.NotaCredito)))();
  let dynamicToAdelanto = () => (dynamicToAdelanto = dart.constFn(dart.fnType(src__models__adelanto.Adelanto, [dart.dynamic])))();
  let IterableOfAdelanto = () => (IterableOfAdelanto = dart.constFn(core.Iterable$(src__models__adelanto.Adelanto)))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let MapOfString$dynamicToFactura = () => (MapOfString$dynamicToFactura = dart.constFn(dart.fnType(src__models__factura.Factura, [MapOfString$dynamic()])))();
  let IterableOfFactura = () => (IterableOfFactura = dart.constFn(core.Iterable$(src__models__factura.Factura)))();
  let ListOfFactura = () => (ListOfFactura = dart.constFn(core.List$(src__models__factura.Factura)))();
  let MapOfString$dynamicToRecibo = () => (MapOfString$dynamicToRecibo = dart.constFn(dart.fnType(src__models__recibo.Recibo, [MapOfString$dynamic()])))();
  let IterableOfRecibo = () => (IterableOfRecibo = dart.constFn(core.Iterable$(src__models__recibo.Recibo)))();
  let ListOfRecibo = () => (ListOfRecibo = dart.constFn(core.List$(src__models__recibo.Recibo)))();
  let const$;
  src__blocs__events__documentos_events.DocumentosSearchEvent = class DocumentosSearchEvent extends src__equatable.Equatable {};
  (src__blocs__events__documentos_events.DocumentosSearchEvent.new = function(props) {
    if (props === void 0) props = const$ || (const$ = dart.constList([], dart.dynamic));
    src__blocs__events__documentos_events.DocumentosSearchEvent.__proto__.new.call(this, props);
  }).prototype = src__blocs__events__documentos_events.DocumentosSearchEvent.prototype;
  dart.addTypeTests(src__blocs__events__documentos_events.DocumentosSearchEvent);
  let const$0;
  src__blocs__states__documentos_state.DocumentosSearchState = class DocumentosSearchState extends src__equatable.Equatable {};
  (src__blocs__states__documentos_state.DocumentosSearchState.new = function(props) {
    if (props === void 0) props = const$0 || (const$0 = dart.constList([], dart.dynamic));
    src__blocs__states__documentos_state.DocumentosSearchState.__proto__.new.call(this, props);
  }).prototype = src__blocs__states__documentos_state.DocumentosSearchState.prototype;
  dart.addTypeTests(src__blocs__states__documentos_state.DocumentosSearchState);
  src__blocs__documentos_bloc.DocumentosSearchBloc = class DocumentosSearchBloc extends src__bloc.Bloc$(src__blocs__events__documentos_events.DocumentosSearchEvent, src__blocs__states__documentos_state.DocumentosSearchState) {
    get documentosRepo() {
      return this[documentosRepo$];
    }
    set documentosRepo(value) {
      super.documentosRepo = value;
    }
    transform(events, next) {
      StreamOfDocumentosSearchEvent()._check(events);
      DocumentosSearchEventToStreamOfDocumentosSearchState()._check(next);
      return super.transform(ObservableOfDocumentosSearchEvent().as(events).debounce(new core.Duration.new({milliseconds: 500})), next);
    }
    onTransition(transition) {
      TransitionOfDocumentosSearchEvent$DocumentosSearchState()._check(transition);
      core.print(transition);
    }
    get initialState() {
      return new src__blocs__states__documentos_state.SearchStateEmpty.new();
    }
    mapEventToState(event) {
      return new (_AsyncStarImplOfDocumentosSearchState()).new((function* mapEventToState(stream) {
        src__blocs__events__documentos_events.DocumentosSearchEvent._check(event);
        if (src__blocs__events__documentos_events.TextChanged.is(event)) {
          let searchTerm = event.text;
          if (searchTerm[$isEmpty]) {
            if (stream.add(new src__blocs__states__documentos_state.SearchStateEmpty.new())) return;
            yield;
          } else {
            if (stream.add(new src__blocs__states__documentos_state.SearchStateLoading.new())) return;
            yield;
            try {
              let results = (yield this.documentosRepo.searchFacturas(searchTerm));
              core.print(results);
              if (stream.add(new src__blocs__states__documentos_state.SearchStateSuccess.new(results))) return;
              yield;
            } catch (e) {
              let error = dart.getThrown(e);
              core.print(error);
              if (stream.add(src__models__search_result_error.SearchResultError.is(error) ? new src__blocs__states__documentos_state.SearchStateError.new(error.message) : new src__blocs__states__documentos_state.SearchStateError.new("something went wrong"))) return;
              yield;
            }
          }
        }
      }).bind(this)).stream;
    }
  };
  (src__blocs__documentos_bloc.DocumentosSearchBloc.new = function(opts) {
    let documentosRepo = opts && 'documentosRepo' in opts ? opts.documentosRepo : null;
    this[documentosRepo$] = documentosRepo;
    src__blocs__documentos_bloc.DocumentosSearchBloc.__proto__.new.call(this);
  }).prototype = src__blocs__documentos_bloc.DocumentosSearchBloc.prototype;
  dart.addTypeTests(src__blocs__documentos_bloc.DocumentosSearchBloc);
  const documentosRepo$ = Symbol("DocumentosSearchBloc.documentosRepo");
  dart.setMethodSignature(src__blocs__documentos_bloc.DocumentosSearchBloc, () => ({
    __proto__: dart.getMethods(src__blocs__documentos_bloc.DocumentosSearchBloc.__proto__),
    transform: dart.fnType(async.Stream$(src__blocs__states__documentos_state.DocumentosSearchState), [core.Object, core.Object]),
    onTransition: dart.fnType(dart.void, [core.Object]),
    mapEventToState: dart.fnType(async.Stream$(src__blocs__states__documentos_state.DocumentosSearchState), [core.Object])
  }));
  dart.setGetterSignature(src__blocs__documentos_bloc.DocumentosSearchBloc, () => ({
    __proto__: dart.getGetters(src__blocs__documentos_bloc.DocumentosSearchBloc.__proto__),
    initialState: src__blocs__states__documentos_state.DocumentosSearchState
  }));
  dart.setFieldSignature(src__blocs__documentos_bloc.DocumentosSearchBloc, () => ({
    __proto__: dart.getFields(src__blocs__documentos_bloc.DocumentosSearchBloc.__proto__),
    documentosRepo: dart.finalFieldType(src__repositories__documentos_repo.DocumentosRepo)
  }));
  src__ventas_client.VentasClient = class VentasClient extends core.Object {
    get baseUrl() {
      return this[baseUrl$];
    }
    set baseUrl(value) {
      super.baseUrl = value;
    }
    get httpClient() {
      return this[httpClient$];
    }
    set httpClient(value) {
      super.httpClient = value;
    }
    ordersSearch(term) {
      return async.async(src__models__order_result.OrderResult, function* ordersSearch() {
        return FutureOfOrderResult().value(null);
      });
    }
    activitySearch(term) {
      let tasks = JSArrayOfActivity().of([new src__models__activity.Activity.new({name: "Llamar a La Anonima", category: "Recordatorio", date: "2019-04-05 05:00:00", content: "Nueva venta", completed: false}), new src__models__activity.Activity.new({name: "Panaderia Las 2L", category: "Visita", date: "2019-04-03 10:00:00", content: "Pan no leva", completed: true}), new src__models__activity.Activity.new({name: "Design explorations", category: "Visita", date: "2019-04-03 10:00:00", content: "#259B24", completed: false}), new src__models__activity.Activity.new({name: "Lunch with Mary", category: "Visita", date: "2019-04-03 10:00:00", content: "#2196F3", completed: true}), new src__models__activity.Activity.new({name: "Teem Meeting", category: "Recordatorio", date: "2019-04-03 10:00:00", content: "#259B24", completed: true})]);
      return tasks;
    }
  };
  (src__ventas_client.VentasClient.new = function(opts) {
    let httpClient = opts && 'httpClient' in opts ? opts.httpClient : null;
    let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : "https://api.github.com/search/repositories?q=";
    this[baseUrl$] = baseUrl;
    this[httpClient$] = httpClient != null ? httpClient : src__client.Client.new();
  }).prototype = src__ventas_client.VentasClient.prototype;
  dart.addTypeTests(src__ventas_client.VentasClient);
  const baseUrl$ = Symbol("VentasClient.baseUrl");
  const httpClient$ = Symbol("VentasClient.httpClient");
  dart.setMethodSignature(src__ventas_client.VentasClient, () => ({
    __proto__: dart.getMethods(src__ventas_client.VentasClient.__proto__),
    ordersSearch: dart.fnType(async.Future$(src__models__order_result.OrderResult), [core.String]),
    activitySearch: dart.fnType(core.List$(src__models__activity.Activity), [core.String])
  }));
  dart.setFieldSignature(src__ventas_client.VentasClient, () => ({
    __proto__: dart.getFields(src__ventas_client.VentasClient.__proto__),
    baseUrl: dart.finalFieldType(core.String),
    httpClient: dart.finalFieldType(src__client.Client)
  }));
  src__models__order_result.OrderResult = class OrderResult extends core.Object {
    get orders() {
      return this[orders$];
    }
    set orders(value) {
      super.orders = value;
    }
    static fromJson(json) {
      let orders = IterableOfOrder()._check(core.List.as(json[$_get]("orders"))[$map](src__models__order.Order, dart.fn(order => src__models__order.Order.fromJson(MapOfString$dynamic().as(order)), dynamicToOrder())))[$toList]();
      return new src__models__order_result.OrderResult.new({orders: orders});
    }
  };
  (src__models__order_result.OrderResult.new = function(opts) {
    let orders = opts && 'orders' in opts ? opts.orders : null;
    this[orders$] = orders;
  }).prototype = src__models__order_result.OrderResult.prototype;
  dart.addTypeTests(src__models__order_result.OrderResult);
  const orders$ = Symbol("OrderResult.orders");
  dart.setFieldSignature(src__models__order_result.OrderResult, () => ({
    __proto__: dart.getFields(src__models__order_result.OrderResult.__proto__),
    orders: dart.finalFieldType(ListOfOrder())
  }));
  src__models__order.Order = class Order extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get fecha() {
      return this[fecha$];
    }
    set fecha(value) {
      super.fecha = value;
    }
    get fechaEntrega() {
      return this[fechaEntrega$];
    }
    set fechaEntrega(value) {
      super.fechaEntrega = value;
    }
    get cliente() {
      return this[cliente$];
    }
    set cliente(value) {
      super.cliente = value;
    }
    get vendedor() {
      return this[vendedor$];
    }
    set vendedor(value) {
      super.vendedor = value;
    }
    get estado() {
      return this[estado$];
    }
    set estado(value) {
      super.estado = value;
    }
    get items() {
      return this[items$];
    }
    set items(value) {
      super.items = value;
    }
    static fromJson(json) {
      return new src__models__order.Order.new({id: core.int.as(dart.dindex(json, "id")), fecha: core.String.as(dart.dindex(json, "fecha")), fechaEntrega: core.String.as(dart.dindex(json, "fechaEntrega")), cliente: core.String.as(dart.dindex(json, "cliente")), vendedor: core.String.as(dart.dindex(json, "vendedor")), estado: core.String.as(dart.dindex(json, "estado")), items: IterableOfOrderItem()._check(core.List.as(dart.dindex(json, "items"))[$map](src__models__order_item.OrderItem, dart.fn(item => src__models__order_item.OrderItem.fromJson(MapOfString$dynamic().as(item)), dynamicToOrderItem())))[$toList]()});
    }
  };
  (src__models__order.Order.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let fecha = opts && 'fecha' in opts ? opts.fecha : null;
    let fechaEntrega = opts && 'fechaEntrega' in opts ? opts.fechaEntrega : null;
    let cliente = opts && 'cliente' in opts ? opts.cliente : null;
    let estado = opts && 'estado' in opts ? opts.estado : null;
    let items = opts && 'items' in opts ? opts.items : null;
    let vendedor = opts && 'vendedor' in opts ? opts.vendedor : null;
    this[id$] = id;
    this[fecha$] = fecha;
    this[fechaEntrega$] = fechaEntrega;
    this[cliente$] = cliente;
    this[estado$] = estado;
    this[items$] = items;
    this[vendedor$] = vendedor;
  }).prototype = src__models__order.Order.prototype;
  dart.addTypeTests(src__models__order.Order);
  const id$ = Symbol("Order.id");
  const fecha$ = Symbol("Order.fecha");
  const fechaEntrega$ = Symbol("Order.fechaEntrega");
  const cliente$ = Symbol("Order.cliente");
  const vendedor$ = Symbol("Order.vendedor");
  const estado$ = Symbol("Order.estado");
  const items$ = Symbol("Order.items");
  dart.setFieldSignature(src__models__order.Order, () => ({
    __proto__: dart.getFields(src__models__order.Order.__proto__),
    id: dart.finalFieldType(core.int),
    fecha: dart.finalFieldType(core.String),
    fechaEntrega: dart.finalFieldType(core.String),
    cliente: dart.finalFieldType(core.String),
    vendedor: dart.finalFieldType(core.String),
    estado: dart.finalFieldType(core.String),
    items: dart.finalFieldType(ListOfOrderItem())
  }));
  src__models__order_item.OrderItem = class OrderItem extends core.Object {
    get id() {
      return this[id$0];
    }
    set id(value) {
      super.id = value;
    }
    get producto() {
      return this[producto$];
    }
    set producto(value) {
      super.producto = value;
    }
    get productoId() {
      return this[productoId$];
    }
    set productoId(value) {
      super.productoId = value;
    }
    get cantidad() {
      return this[cantidad$];
    }
    set cantidad(value) {
      super.cantidad = value;
    }
    get unidad() {
      return this[unidad$];
    }
    set unidad(value) {
      super.unidad = value;
    }
    get precio() {
      return this[precio$];
    }
    set precio(value) {
      super.precio = value;
    }
    get descuento() {
      return this[descuento$];
    }
    set descuento(value) {
      super.descuento = value;
    }
    static fromJson(json) {
      return new src__models__order_item.OrderItem.new({id: core.int.as(dart.dindex(json, "id")), productoId: core.int.as(dart.dindex(json, "productoId")), producto: core.String.as(dart.dindex(json, "producto")), cantidad: core.int.as(dart.dindex(json, "cantidad")), unidad: core.String.as(dart.dindex(json, "vendedor")), precio: core.String.as(dart.dindex(json, "precio")), descuento: core.String.as(dart.dindex(json, "descuento"))});
    }
  };
  (src__models__order_item.OrderItem.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let producto = opts && 'producto' in opts ? opts.producto : null;
    let productoId = opts && 'productoId' in opts ? opts.productoId : null;
    let unidad = opts && 'unidad' in opts ? opts.unidad : null;
    let cantidad = opts && 'cantidad' in opts ? opts.cantidad : null;
    let descuento = opts && 'descuento' in opts ? opts.descuento : null;
    let precio = opts && 'precio' in opts ? opts.precio : null;
    this[id$0] = id;
    this[producto$] = producto;
    this[productoId$] = productoId;
    this[unidad$] = unidad;
    this[cantidad$] = cantidad;
    this[descuento$] = descuento;
    this[precio$] = precio;
  }).prototype = src__models__order_item.OrderItem.prototype;
  dart.addTypeTests(src__models__order_item.OrderItem);
  const id$0 = Symbol("OrderItem.id");
  const producto$ = Symbol("OrderItem.producto");
  const productoId$ = Symbol("OrderItem.productoId");
  const cantidad$ = Symbol("OrderItem.cantidad");
  const unidad$ = Symbol("OrderItem.unidad");
  const precio$ = Symbol("OrderItem.precio");
  const descuento$ = Symbol("OrderItem.descuento");
  dart.setFieldSignature(src__models__order_item.OrderItem, () => ({
    __proto__: dart.getFields(src__models__order_item.OrderItem.__proto__),
    id: dart.finalFieldType(core.int),
    producto: dart.finalFieldType(core.String),
    productoId: dart.finalFieldType(core.int),
    cantidad: dart.finalFieldType(core.int),
    unidad: dart.finalFieldType(core.String),
    precio: dart.finalFieldType(core.String),
    descuento: dart.finalFieldType(core.String)
  }));
  src__models__order_result_error.OrderResultError = class OrderResultError extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    static fromJson(json) {
      return new src__models__order_result_error.OrderResultError.new({message: core.String.as(dart.dindex(json, "message"))});
    }
  };
  (src__models__order_result_error.OrderResultError.new = function(opts) {
    let message = opts && 'message' in opts ? opts.message : null;
    this[message$] = message;
  }).prototype = src__models__order_result_error.OrderResultError.prototype;
  dart.addTypeTests(src__models__order_result_error.OrderResultError);
  const message$ = Symbol("OrderResultError.message");
  dart.setFieldSignature(src__models__order_result_error.OrderResultError, () => ({
    __proto__: dart.getFields(src__models__order_result_error.OrderResultError.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  src__models__activity.Activity = class Activity extends core.Object {
    get id() {
      return this[id$1];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get category() {
      return this[category$];
    }
    set category(value) {
      super.category = value;
    }
    get date() {
      return this[date$];
    }
    set date(value) {
      super.date = value;
    }
    get content() {
      return this[content$];
    }
    set content(value) {
      super.content = value;
    }
    get completed() {
      return this[completed$];
    }
    set completed(value) {
      super.completed = value;
    }
    static fromJson(json) {
      return new src__models__activity.Activity.new({id: core.int.as(dart.dindex(json, "id")), name: core.String.as(dart.dindex(json, "name")), category: core.String.as(dart.dindex(json, "category")), date: core.String.as(dart.dindex(json, "time")), content: core.String.as(dart.dindex(json, "color")), completed: core.bool.as(dart.dindex(json, "completed"))});
    }
  };
  (src__models__activity.Activity.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let category = opts && 'category' in opts ? opts.category : null;
    let date = opts && 'date' in opts ? opts.date : null;
    let content = opts && 'content' in opts ? opts.content : null;
    let completed = opts && 'completed' in opts ? opts.completed : null;
    this[id$1] = id;
    this[name$] = name;
    this[category$] = category;
    this[date$] = date;
    this[content$] = content;
    this[completed$] = completed;
  }).prototype = src__models__activity.Activity.prototype;
  dart.addTypeTests(src__models__activity.Activity);
  const id$1 = Symbol("Activity.id");
  const name$ = Symbol("Activity.name");
  const category$ = Symbol("Activity.category");
  const date$ = Symbol("Activity.date");
  const content$ = Symbol("Activity.content");
  const completed$ = Symbol("Activity.completed");
  dart.setFieldSignature(src__models__activity.Activity, () => ({
    __proto__: dart.getFields(src__models__activity.Activity.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.finalFieldType(core.String),
    category: dart.finalFieldType(core.String),
    date: dart.finalFieldType(core.String),
    content: dart.finalFieldType(core.String),
    completed: dart.finalFieldType(core.bool)
  }));
  src__models__deposito.Deposito = class Deposito extends core.Object {
    get number() {
      return this[number$];
    }
    set number(value) {
      this[number$] = value;
    }
    get amount() {
      return this[amount$];
    }
    set amount(value) {
      this[amount$] = value;
    }
    get date() {
      return this[date$0];
    }
    set date(value) {
      this[date$0] = value;
    }
    get imagePath() {
      return this[imagePath$];
    }
    set imagePath(value) {
      this[imagePath$] = value;
    }
    static fromJson(json) {
      return src__models__deposito._$DepositoFromJson(json);
    }
    toJson() {
      return src__models__deposito._$DepositoToJson(this);
    }
  };
  (src__models__deposito.Deposito.new = function(number, amount, date, imagePath) {
    this[number$] = number;
    this[amount$] = amount;
    this[date$0] = date;
    this[imagePath$] = imagePath;
  }).prototype = src__models__deposito.Deposito.prototype;
  dart.addTypeTests(src__models__deposito.Deposito);
  const number$ = Symbol("Deposito.number");
  const amount$ = Symbol("Deposito.amount");
  const date$0 = Symbol("Deposito.date");
  const imagePath$ = Symbol("Deposito.imagePath");
  dart.setMethodSignature(src__models__deposito.Deposito, () => ({
    __proto__: dart.getMethods(src__models__deposito.Deposito.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__models__deposito.Deposito, () => ({
    __proto__: dart.getFields(src__models__deposito.Deposito.__proto__),
    number: dart.fieldType(core.int),
    amount: dart.fieldType(core.String),
    date: dart.fieldType(core.DateTime),
    imagePath: dart.fieldType(core.String)
  }));
  src__models__deposito._$DepositoFromJson = function(json) {
    return new src__models__deposito.Deposito.new(core.int.as(json[$_get]("number")), core.String.as(json[$_get]("amount")), core.DateTime.parse(core.String.as(json[$_get]("date"))), core.String.as(json[$_get]("imagePath")));
  };
  src__models__deposito._$DepositoToJson = function(instance) {
    return new (IdentityMapOfString$dynamic()).from(["number", instance.number, "amount", instance.amount, "date", instance.date.toIso8601String(), "imagePath", instance.imagePath]);
  };
  src__models__nota_credito.NotaCredito = class NotaCredito extends core.Object {
    get tipo() {
      return this[tipo$];
    }
    set tipo(value) {
      this[tipo$] = value;
    }
    get numero() {
      return this[numero$];
    }
    set numero(value) {
      this[numero$] = value;
    }
    get monto() {
      return this[monto$];
    }
    set monto(value) {
      this[monto$] = value;
    }
    get fecha() {
      return this[fecha$0];
    }
    set fecha(value) {
      this[fecha$0] = value;
    }
    get descripcion() {
      return this[descripcion$];
    }
    set descripcion(value) {
      this[descripcion$] = value;
    }
    static fromJson(json) {
      return src__models__nota_credito._$NotaCreditoFromJson(json);
    }
    toJson() {
      return src__models__nota_credito._$NotaCreditoToJson(this);
    }
  };
  (src__models__nota_credito.NotaCredito.new = function(tipo, numero, monto, fecha, descripcion) {
    this[tipo$] = tipo;
    this[numero$] = numero;
    this[monto$] = monto;
    this[fecha$0] = fecha;
    this[descripcion$] = descripcion;
  }).prototype = src__models__nota_credito.NotaCredito.prototype;
  dart.addTypeTests(src__models__nota_credito.NotaCredito);
  const tipo$ = Symbol("NotaCredito.tipo");
  const numero$ = Symbol("NotaCredito.numero");
  const monto$ = Symbol("NotaCredito.monto");
  const fecha$0 = Symbol("NotaCredito.fecha");
  const descripcion$ = Symbol("NotaCredito.descripcion");
  dart.setMethodSignature(src__models__nota_credito.NotaCredito, () => ({
    __proto__: dart.getMethods(src__models__nota_credito.NotaCredito.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__models__nota_credito.NotaCredito, () => ({
    __proto__: dart.getFields(src__models__nota_credito.NotaCredito.__proto__),
    tipo: dart.fieldType(core.String),
    numero: dart.fieldType(core.int),
    monto: dart.fieldType(core.num),
    fecha: dart.fieldType(core.DateTime),
    descripcion: dart.fieldType(core.String)
  }));
  src__models__nota_credito._$NotaCreditoFromJson = function(json) {
    return new src__models__nota_credito.NotaCredito.new(core.String.as(json[$_get]("tipo")), core.int.as(json[$_get]("numero")), core.num.as(json[$_get]("monto")), core.DateTime.parse(core.String.as(json[$_get]("fecha"))), core.String.as(json[$_get]("descripcion")));
  };
  src__models__nota_credito._$NotaCreditoToJson = function(instance) {
    return new (IdentityMapOfString$dynamic()).from(["tipo", instance.tipo, "numero", instance.numero, "monto", instance.monto, "fecha", instance.fecha.toIso8601String(), "descripcion", instance.descripcion]);
  };
  src__models__cheque.Cheque = class Cheque extends core.Object {
    get number() {
      return this[number$0];
    }
    set number(value) {
      this[number$0] = value;
    }
    get amount() {
      return this[amount$0];
    }
    set amount(value) {
      this[amount$0] = value;
    }
    get date() {
      return this[date$1];
    }
    set date(value) {
      this[date$1] = value;
    }
    get imagePath() {
      return this[imagePath$0];
    }
    set imagePath(value) {
      this[imagePath$0] = value;
    }
    static fromJson(json) {
      return src__models__cheque._$ChequeFromJson(json);
    }
    toJson() {
      return src__models__cheque._$ChequeToJson(this);
    }
  };
  (src__models__cheque.Cheque.new = function(number, amount, date, imagePath) {
    this[number$0] = number;
    this[amount$0] = amount;
    this[date$1] = date;
    this[imagePath$0] = imagePath;
  }).prototype = src__models__cheque.Cheque.prototype;
  dart.addTypeTests(src__models__cheque.Cheque);
  const number$0 = Symbol("Cheque.number");
  const amount$0 = Symbol("Cheque.amount");
  const date$1 = Symbol("Cheque.date");
  const imagePath$0 = Symbol("Cheque.imagePath");
  dart.setMethodSignature(src__models__cheque.Cheque, () => ({
    __proto__: dart.getMethods(src__models__cheque.Cheque.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__models__cheque.Cheque, () => ({
    __proto__: dart.getFields(src__models__cheque.Cheque.__proto__),
    number: dart.fieldType(core.int),
    amount: dart.fieldType(core.String),
    date: dart.fieldType(core.DateTime),
    imagePath: dart.fieldType(core.String)
  }));
  src__models__cheque._$ChequeFromJson = function(json) {
    return new src__models__cheque.Cheque.new(core.int.as(json[$_get]("number")), core.String.as(json[$_get]("amount")), core.DateTime.parse(core.String.as(json[$_get]("date"))), core.String.as(json[$_get]("imagePath")));
  };
  src__models__cheque._$ChequeToJson = function(instance) {
    return new (IdentityMapOfString$dynamic()).from(["number", instance.number, "amount", instance.amount, "date", instance.date.toIso8601String(), "imagePath", instance.imagePath]);
  };
  src__models__adelanto.Adelanto = class Adelanto extends core.Object {
    get number() {
      return this[number$1];
    }
    set number(value) {
      this[number$1] = value;
    }
    get amount() {
      return this[amount$1];
    }
    set amount(value) {
      this[amount$1] = value;
    }
    get date() {
      return this[date$2];
    }
    set date(value) {
      this[date$2] = value;
    }
    static fromJson(json) {
      return src__models__adelanto._$AdelantoFromJson(json);
    }
    toJson() {
      return src__models__adelanto._$AdelantoToJson(this);
    }
  };
  (src__models__adelanto.Adelanto.new = function(number, amount, date) {
    this[number$1] = number;
    this[amount$1] = amount;
    this[date$2] = date;
  }).prototype = src__models__adelanto.Adelanto.prototype;
  dart.addTypeTests(src__models__adelanto.Adelanto);
  const number$1 = Symbol("Adelanto.number");
  const amount$1 = Symbol("Adelanto.amount");
  const date$2 = Symbol("Adelanto.date");
  dart.setMethodSignature(src__models__adelanto.Adelanto, () => ({
    __proto__: dart.getMethods(src__models__adelanto.Adelanto.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__models__adelanto.Adelanto, () => ({
    __proto__: dart.getFields(src__models__adelanto.Adelanto.__proto__),
    number: dart.fieldType(core.int),
    amount: dart.fieldType(core.String),
    date: dart.fieldType(core.DateTime)
  }));
  src__models__adelanto._$AdelantoFromJson = function(json) {
    return new src__models__adelanto.Adelanto.new(core.int.as(json[$_get]("number")), core.String.as(json[$_get]("amount")), core.DateTime.parse(core.String.as(json[$_get]("date"))));
  };
  src__models__adelanto._$AdelantoToJson = function(instance) {
    return new (IdentityMapOfString$dynamic()).from(["number", instance.number, "amount", instance.amount, "date", instance.date.toIso8601String()]);
  };
  src__models__factura.Factura = class Factura extends core.Object {
    get numero() {
      return this[numero$0];
    }
    set numero(value) {
      this[numero$0] = value;
    }
    get descripcion() {
      return this[descripcion$0];
    }
    set descripcion(value) {
      this[descripcion$0] = value;
    }
    get monto() {
      return this[monto$0];
    }
    set monto(value) {
      this[monto$0] = value;
    }
    get fecha() {
      return this[fecha$1];
    }
    set fecha(value) {
      this[fecha$1] = value;
    }
    get documentoPath() {
      return this[documentoPath$];
    }
    set documentoPath(value) {
      this[documentoPath$] = value;
    }
    get estado() {
      return this[estado$0];
    }
    set estado(value) {
      this[estado$0] = value;
    }
    get clienteId() {
      return this[clienteId$];
    }
    set clienteId(value) {
      this[clienteId$] = value;
    }
    static fromJson(json) {
      return src__models__factura._$FacturaFromJson(json);
    }
    toJson() {
      return src__models__factura._$FacturaToJson(this);
    }
  };
  (src__models__factura.Factura.new = function(numero, descripcion, monto, fecha, documentoPath, estado, clienteId) {
    this[numero$0] = numero;
    this[descripcion$0] = descripcion;
    this[monto$0] = monto;
    this[fecha$1] = fecha;
    this[documentoPath$] = documentoPath;
    this[estado$0] = estado;
    this[clienteId$] = clienteId;
  }).prototype = src__models__factura.Factura.prototype;
  dart.addTypeTests(src__models__factura.Factura);
  const numero$0 = Symbol("Factura.numero");
  const descripcion$0 = Symbol("Factura.descripcion");
  const monto$0 = Symbol("Factura.monto");
  const fecha$1 = Symbol("Factura.fecha");
  const documentoPath$ = Symbol("Factura.documentoPath");
  const estado$0 = Symbol("Factura.estado");
  const clienteId$ = Symbol("Factura.clienteId");
  dart.setMethodSignature(src__models__factura.Factura, () => ({
    __proto__: dart.getMethods(src__models__factura.Factura.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__models__factura.Factura, () => ({
    __proto__: dart.getFields(src__models__factura.Factura.__proto__),
    numero: dart.fieldType(core.int),
    descripcion: dart.fieldType(core.String),
    monto: dart.fieldType(core.num),
    fecha: dart.fieldType(core.DateTime),
    documentoPath: dart.fieldType(core.String),
    estado: dart.fieldType(core.String),
    clienteId: dart.fieldType(core.String)
  }));
  src__models__factura._$FacturaFromJson = function(json) {
    return new src__models__factura.Factura.new(core.int.as(json[$_get]("numero")), core.String.as(json[$_get]("descripcion")), core.num.as(json[$_get]("monto")), core.DateTime.parse(core.String.as(json[$_get]("fecha"))), core.String.as(json[$_get]("documentoPath")), core.String.as(json[$_get]("estado")), core.String.as(json[$_get]("clienteId")));
  };
  src__models__factura._$FacturaToJson = function(instance) {
    return new (IdentityMapOfString$dynamic()).from(["numero", instance.numero, "descripcion", instance.descripcion, "monto", instance.monto, "fecha", instance.fecha.toIso8601String(), "documentoPath", instance.documentoPath, "estado", instance.estado, "clienteId", instance.clienteId]);
  };
  src__models__search_result_error.SearchResultError = class SearchResultError extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    static fromJson(json) {
      return new src__models__search_result_error.SearchResultError.new({message: core.String.as(dart.dindex(json, "message"))});
    }
  };
  (src__models__search_result_error.SearchResultError.new = function(opts) {
    let message = opts && 'message' in opts ? opts.message : null;
    this[message$0] = message;
  }).prototype = src__models__search_result_error.SearchResultError.prototype;
  dart.addTypeTests(src__models__search_result_error.SearchResultError);
  const message$0 = Symbol("SearchResultError.message");
  dart.setFieldSignature(src__models__search_result_error.SearchResultError, () => ({
    __proto__: dart.getFields(src__models__search_result_error.SearchResultError.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  src__models__recibo.Recibo = class Recibo extends core.Object {
    get guid() {
      return this[guid$];
    }
    set guid(value) {
      this[guid$] = value;
    }
    get number() {
      return this[number$2];
    }
    set number(value) {
      this[number$2] = value;
    }
    get amount() {
      return this[amount$2];
    }
    set amount(value) {
      this[amount$2] = value;
    }
    get customerId() {
      return this[customerId$];
    }
    set customerId(value) {
      this[customerId$] = value;
    }
    get deposits() {
      return this[deposits$];
    }
    set deposits(value) {
      this[deposits$] = value;
    }
    get checks() {
      return this[checks$];
    }
    set checks(value) {
      this[checks$] = value;
    }
    get creditNote() {
      return this[creditNote$];
    }
    set creditNote(value) {
      this[creditNote$] = value;
    }
    get advance() {
      return this[advance$];
    }
    set advance(value) {
      this[advance$] = value;
    }
    static fromJson(json) {
      return src__models__recibo._$ReciboFromJson(json);
    }
    toJson() {
      return src__models__recibo._$ReciboToJson(this);
    }
  };
  (src__models__recibo.Recibo.new = function(guid, number, amount, customerId, deposits, checks, creditNote, advance) {
    this[guid$] = guid;
    this[number$2] = number;
    this[amount$2] = amount;
    this[customerId$] = customerId;
    this[deposits$] = deposits;
    this[checks$] = checks;
    this[creditNote$] = creditNote;
    this[advance$] = advance;
  }).prototype = src__models__recibo.Recibo.prototype;
  dart.addTypeTests(src__models__recibo.Recibo);
  const guid$ = Symbol("Recibo.guid");
  const number$2 = Symbol("Recibo.number");
  const amount$2 = Symbol("Recibo.amount");
  const customerId$ = Symbol("Recibo.customerId");
  const deposits$ = Symbol("Recibo.deposits");
  const checks$ = Symbol("Recibo.checks");
  const creditNote$ = Symbol("Recibo.creditNote");
  const advance$ = Symbol("Recibo.advance");
  dart.setMethodSignature(src__models__recibo.Recibo, () => ({
    __proto__: dart.getMethods(src__models__recibo.Recibo.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__models__recibo.Recibo, () => ({
    __proto__: dart.getFields(src__models__recibo.Recibo.__proto__),
    guid: dart.fieldType(core.String),
    number: dart.fieldType(core.int),
    amount: dart.fieldType(core.num),
    customerId: dart.fieldType(core.int),
    deposits: dart.fieldType(ListOfDeposito()),
    checks: dart.fieldType(ListOfCheque()),
    creditNote: dart.fieldType(ListOfNotaCredito()),
    advance: dart.fieldType(ListOfAdelanto())
  }));
  src__models__recibo._$ReciboFromJson = function(json) {
    return new src__models__recibo.Recibo.new(core.String.as(json[$_get]("guid")), core.int.as(json[$_get]("number")), core.num.as(json[$_get]("amount")), core.int.as(json[$_get]("customerId")), IterableOfDeposito()._check(core.List.as(json[$_get]("deposits"))[$map](src__models__deposito.Deposito, dart.fn(e => src__models__deposito.Deposito.fromJson(MapOfString$dynamic().as(e)), dynamicToDeposito())))[$toList](), IterableOfCheque()._check(core.List.as(json[$_get]("checks"))[$map](src__models__cheque.Cheque, dart.fn(e => src__models__cheque.Cheque.fromJson(MapOfString$dynamic().as(e)), dynamicToCheque())))[$toList](), IterableOfNotaCredito()._check(core.List.as(json[$_get]("creditNote"))[$map](src__models__nota_credito.NotaCredito, dart.fn(e => src__models__nota_credito.NotaCredito.fromJson(MapOfString$dynamic().as(e)), dynamicToNotaCredito())))[$toList](), IterableOfAdelanto()._check(core.List.as(json[$_get]("advance"))[$map](src__models__adelanto.Adelanto, dart.fn(e => src__models__adelanto.Adelanto.fromJson(MapOfString$dynamic().as(e)), dynamicToAdelanto())))[$toList]());
  };
  src__models__recibo._$ReciboToJson = function(instance) {
    return new (IdentityMapOfString$dynamic()).from(["guid", instance.guid, "number", instance.number, "amount", instance.amount, "customerId", instance.customerId, "deposits", instance.deposits, "checks", instance.checks, "creditNote", instance.creditNote, "advance", instance.advance]);
  };
  dart.copyProperties(src__models__mocks__mocks, {
    get mockRecibo() {
      return src__models__mocks__mocks._$mockReciboJsonLiteral;
    }
  });
  dart.copyProperties(src__models__mocks__mocks, {
    get mockFactura() {
      return src__models__mocks__mocks._$mockFacturaJsonLiteral;
    }
  });
  dart.defineLazy(src__models__mocks__mocks, {
    /*src__models__mocks__mocks._$mockReciboJsonLiteral*/get _$mockReciboJsonLiteral() {
      return dart.constList([dart.constMap(core.String, core.Object, ["guid", 1, "number", 123, "amount", 500.0, "customerId", 7051, "deposits", dart.constList([dart.constMap(core.String, core.Object, ["number", 123, "amount", 500, "date", "2019-04-23", "imagePath", ""])], MapOfString$Object()), "checks", dart.constList([], dart.dynamic), "advance", dart.constList([], dart.dynamic), "creditNote", dart.constList([], dart.dynamic)]), dart.constMap(core.String, core.Object, ["guid", 2, "number", 124, "amount", 300.0, "customerId", 7052, "deposits", dart.constList([], dart.dynamic), "checks", dart.constList([dart.constMap(core.String, core.Object, ["number", 12345678, "amount", 1234.5, "date", "2019-04-23", "imagePath", ""])], MapOfString$Object()), "advance", dart.constList([], dart.dynamic), "creditNote", dart.constList([], dart.dynamic)])], MapOfString$Object());
    },
    /*src__models__mocks__mocks._$mockFacturaJsonLiteral*/get _$mockFacturaJsonLiteral() {
      return dart.constList([dart.constMap(core.String, core.Object, ["numero", 123654, "descripcion", "Colocación cable red", "monto", 256.6, "fecha", "2019-04-23", "documentoPath", "", "estado", "Pendiente", "clienteId", "156425"]), dart.constMap(core.String, core.Object, ["numero", 265498, "descripcion", "Rectificación de cilindros", "monto", 256.6, "fecha", "2019-04-23", "documentoPath", "", "estado", "Pendiente", "clienteId", "15648"])], MapOfString$Object());
    }
  });
  src__services__documentos_api_service.DocumentosApiService = class DocumentosApiService extends core.Object {
    get client() {
      return this[client];
    }
    set client(value) {
      this[client] = value;
    }
    searchFacturas(term) {
      return async.async(ListOfFactura(), (function* searchFacturas() {
        core.print("entered");
        let response = (yield this.client.get("http://api.themoviedb.org/3/movie/popular?api_key=802b2c4b88ea1183e50e6b285a27696e"));
        core.print(dart.toString(response.body));
        if (response.statusCode === 200) {
          core.print("OK");
          let facturas = IterableOfFactura()._check(src__models__mocks__mocks.mockFactura[$map](src__models__factura.Factura, dart.fn(e => src__models__factura.Factura.fromJson(e), MapOfString$dynamicToFactura())))[$toList]();
          return facturas;
        } else {
          dart.throw(core.Exception.new("Error al cargar los recibos"));
        }
      }).bind(this));
    }
  };
  (src__services__documentos_api_service.DocumentosApiService.new = function() {
    this[client] = src__client.Client.new();
  }).prototype = src__services__documentos_api_service.DocumentosApiService.prototype;
  dart.addTypeTests(src__services__documentos_api_service.DocumentosApiService);
  const client = Symbol("DocumentosApiService.client");
  dart.setMethodSignature(src__services__documentos_api_service.DocumentosApiService, () => ({
    __proto__: dart.getMethods(src__services__documentos_api_service.DocumentosApiService.__proto__),
    searchFacturas: dart.fnType(async.Future$(core.List$(src__models__factura.Factura)), [core.String])
  }));
  dart.setFieldSignature(src__services__documentos_api_service.DocumentosApiService, () => ({
    __proto__: dart.getFields(src__services__documentos_api_service.DocumentosApiService.__proto__),
    client: dart.fieldType(src__client.Client)
  }));
  src__services__ventas_api_service.VentasApiService = class VentasApiService extends core.Object {
    get client() {
      return this[client$];
    }
    set client(value) {
      this[client$] = value;
    }
    getReceiptList() {
      return async.async(ListOfRecibo(), (function* getReceiptList() {
        core.print("entered");
        let response = (yield this.client.get("http://api.themoviedb.org/3/movie/popular?api_key=802b2c4b88ea1183e50e6b285a27696e"));
        core.print(dart.toString(response.body));
        if (response.statusCode === 200) {
          let receipts = IterableOfRecibo()._check(src__models__mocks__mocks.mockRecibo[$map](src__models__recibo.Recibo, dart.fn(e => src__models__recibo.Recibo.fromJson(e), MapOfString$dynamicToRecibo())))[$toList]();
          return receipts;
        } else {
          dart.throw(core.Exception.new("Error al cargar los recibos"));
        }
      }).bind(this));
    }
  };
  (src__services__ventas_api_service.VentasApiService.new = function() {
    this[client$] = src__client.Client.new();
  }).prototype = src__services__ventas_api_service.VentasApiService.prototype;
  dart.addTypeTests(src__services__ventas_api_service.VentasApiService);
  const client$ = Symbol("VentasApiService.client");
  dart.setMethodSignature(src__services__ventas_api_service.VentasApiService, () => ({
    __proto__: dart.getMethods(src__services__ventas_api_service.VentasApiService.__proto__),
    getReceiptList: dart.fnType(async.Future$(core.List$(src__models__recibo.Recibo)), [])
  }));
  dart.setFieldSignature(src__services__ventas_api_service.VentasApiService, () => ({
    __proto__: dart.getFields(src__services__ventas_api_service.VentasApiService.__proto__),
    client: dart.fieldType(src__client.Client)
  }));
  src__repositories__ventas_repo.VentasRepo = class VentasRepo extends core.Object {
    get salesService() {
      return this[salesService];
    }
    set salesService(value) {
      super.salesService = value;
    }
    getReceips() {
      return this.salesService.getReceiptList();
    }
  };
  (src__repositories__ventas_repo.VentasRepo.new = function() {
    this[salesService] = new src__services__ventas_api_service.VentasApiService.new();
  }).prototype = src__repositories__ventas_repo.VentasRepo.prototype;
  dart.addTypeTests(src__repositories__ventas_repo.VentasRepo);
  const salesService = Symbol("VentasRepo.salesService");
  dart.setMethodSignature(src__repositories__ventas_repo.VentasRepo, () => ({
    __proto__: dart.getMethods(src__repositories__ventas_repo.VentasRepo.__proto__),
    getReceips: dart.fnType(async.Future$(core.List$(src__models__recibo.Recibo)), [])
  }));
  dart.setFieldSignature(src__repositories__ventas_repo.VentasRepo, () => ({
    __proto__: dart.getFields(src__repositories__ventas_repo.VentasRepo.__proto__),
    salesService: dart.finalFieldType(src__services__ventas_api_service.VentasApiService)
  }));
  src__repositories__documentos_repo.DocumentosRepo = class DocumentosRepo extends core.Object {
    get documentosService() {
      return this[documentosService];
    }
    set documentosService(value) {
      super.documentosService = value;
    }
    searchFacturas(term) {
      return this.documentosService.searchFacturas(term);
    }
  };
  (src__repositories__documentos_repo.DocumentosRepo.new = function() {
    this[documentosService] = new src__services__documentos_api_service.DocumentosApiService.new();
  }).prototype = src__repositories__documentos_repo.DocumentosRepo.prototype;
  dart.addTypeTests(src__repositories__documentos_repo.DocumentosRepo);
  const documentosService = Symbol("DocumentosRepo.documentosService");
  dart.setMethodSignature(src__repositories__documentos_repo.DocumentosRepo, () => ({
    __proto__: dart.getMethods(src__repositories__documentos_repo.DocumentosRepo.__proto__),
    searchFacturas: dart.fnType(async.Future$(core.List$(src__models__factura.Factura)), [core.String])
  }));
  dart.setFieldSignature(src__repositories__documentos_repo.DocumentosRepo, () => ({
    __proto__: dart.getFields(src__repositories__documentos_repo.DocumentosRepo.__proto__),
    documentosService: dart.finalFieldType(src__services__documentos_api_service.DocumentosApiService)
  }));
  src__blocs__events__documentos_events.TextChanged = class TextChanged extends src__blocs__events__documentos_events.DocumentosSearchEvent {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    toString() {
      return "TextChanged { text: " + dart.str(this.text) + " }";
    }
  };
  (src__blocs__events__documentos_events.TextChanged.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    this[text$] = text;
    src__blocs__events__documentos_events.TextChanged.__proto__.new.call(this, [text]);
  }).prototype = src__blocs__events__documentos_events.TextChanged.prototype;
  dart.addTypeTests(src__blocs__events__documentos_events.TextChanged);
  const text$ = Symbol("TextChanged.text");
  dart.setFieldSignature(src__blocs__events__documentos_events.TextChanged, () => ({
    __proto__: dart.getFields(src__blocs__events__documentos_events.TextChanged.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__blocs__events__documentos_events.TextChanged, ['toString']);
  src__blocs__states__documentos_state.SearchStateEmpty = class SearchStateEmpty extends src__blocs__states__documentos_state.DocumentosSearchState {
    toString() {
      return "SearchStateEmpty";
    }
  };
  (src__blocs__states__documentos_state.SearchStateEmpty.new = function() {
    src__blocs__states__documentos_state.SearchStateEmpty.__proto__.new.call(this);
  }).prototype = src__blocs__states__documentos_state.SearchStateEmpty.prototype;
  dart.addTypeTests(src__blocs__states__documentos_state.SearchStateEmpty);
  dart.defineExtensionMethods(src__blocs__states__documentos_state.SearchStateEmpty, ['toString']);
  src__blocs__states__documentos_state.SearchStateLoading = class SearchStateLoading extends src__blocs__states__documentos_state.DocumentosSearchState {
    toString() {
      return "SearchStateLoading";
    }
  };
  (src__blocs__states__documentos_state.SearchStateLoading.new = function() {
    src__blocs__states__documentos_state.SearchStateLoading.__proto__.new.call(this);
  }).prototype = src__blocs__states__documentos_state.SearchStateLoading.prototype;
  dart.addTypeTests(src__blocs__states__documentos_state.SearchStateLoading);
  dart.defineExtensionMethods(src__blocs__states__documentos_state.SearchStateLoading, ['toString']);
  src__blocs__states__documentos_state.SearchStateSuccess = class SearchStateSuccess extends src__blocs__states__documentos_state.DocumentosSearchState {
    get documentos() {
      return this[documentos$];
    }
    set documentos(value) {
      super.documentos = value;
    }
    toString() {
      return "SearchStateSuccess { items: " + dart.str(this.documentos[$length]) + " }";
    }
  };
  (src__blocs__states__documentos_state.SearchStateSuccess.new = function(documentos) {
    this[documentos$] = documentos;
    src__blocs__states__documentos_state.SearchStateSuccess.__proto__.new.call(this, [documentos]);
  }).prototype = src__blocs__states__documentos_state.SearchStateSuccess.prototype;
  dart.addTypeTests(src__blocs__states__documentos_state.SearchStateSuccess);
  const documentos$ = Symbol("SearchStateSuccess.documentos");
  dart.setFieldSignature(src__blocs__states__documentos_state.SearchStateSuccess, () => ({
    __proto__: dart.getFields(src__blocs__states__documentos_state.SearchStateSuccess.__proto__),
    documentos: dart.finalFieldType(ListOfFactura())
  }));
  dart.defineExtensionMethods(src__blocs__states__documentos_state.SearchStateSuccess, ['toString']);
  src__blocs__states__documentos_state.SearchStateError = class SearchStateError extends src__blocs__states__documentos_state.DocumentosSearchState {
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    toString() {
      return "SearchStateError";
    }
  };
  (src__blocs__states__documentos_state.SearchStateError.new = function(error) {
    this[error$] = error;
    src__blocs__states__documentos_state.SearchStateError.__proto__.new.call(this, [error]);
  }).prototype = src__blocs__states__documentos_state.SearchStateError.prototype;
  dart.addTypeTests(src__blocs__states__documentos_state.SearchStateError);
  const error$ = Symbol("SearchStateError.error");
  dart.setFieldSignature(src__blocs__states__documentos_state.SearchStateError, () => ({
    __proto__: dart.getFields(src__blocs__states__documentos_state.SearchStateError.__proto__),
    error: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__blocs__states__documentos_state.SearchStateError, ['toString']);
  dart.trackLibraries("packages/common_sales_management/common_sales_managemnet.ddc", {
    "package:common_sales_management/src/blocs/documentos_bloc.dart": src__blocs__documentos_bloc,
    "package:common_sales_management/src/ventas_client.dart": src__ventas_client,
    "package:common_sales_management/src/models/order_result.dart": src__models__order_result,
    "package:common_sales_management/src/models/order.dart": src__models__order,
    "package:common_sales_management/common_sales_managemnet.dart": common_sales_managemnet,
    "package:common_sales_management/src/models/order_item.dart": src__models__order_item,
    "package:common_sales_management/src/models/order_result_error.dart": src__models__order_result_error,
    "package:common_sales_management/src/models/activity.dart": src__models__activity,
    "package:common_sales_management/src/models/deposito.dart": src__models__deposito,
    "package:common_sales_management/src/models/nota_credito.dart": src__models__nota_credito,
    "package:common_sales_management/src/models/cheque.dart": src__models__cheque,
    "package:common_sales_management/src/models/adelanto.dart": src__models__adelanto,
    "package:common_sales_management/src/models/factura.dart": src__models__factura,
    "package:common_sales_management/src/models/search_result_error.dart": src__models__search_result_error,
    "package:common_sales_management/src/models/recibo.dart": src__models__recibo,
    "package:common_sales_management/src/models/models.dart": src__models__models,
    "package:common_sales_management/src/models/mocks/mocks.dart": src__models__mocks__mocks,
    "package:common_sales_management/src/services/documentos_api_service.dart": src__services__documentos_api_service,
    "package:common_sales_management/src/services/ventas_api_service.dart": src__services__ventas_api_service,
    "package:common_sales_management/src/services/services.dart": src__services__services,
    "package:common_sales_management/src/repositories/ventas_repo.dart": src__repositories__ventas_repo,
    "package:common_sales_management/src/repositories/documentos_repo.dart": src__repositories__documentos_repo,
    "package:common_sales_management/src/blocs/events/documentos_events.dart": src__blocs__events__documentos_events,
    "package:common_sales_management/src/blocs/states/documentos_state.dart": src__blocs__states__documentos_state
  }, '{"version":3,"sourceRoot":"","sources":["src/blocs/events/documentos_events.dart","src/blocs/states/documentos_state.dart","src/blocs/documentos_bloc.dart","src/ventas_client.dart","src/models/order_result.dart","src/models/order.dart","src/models/order_item.dart","src/models/order_result_error.dart","src/models/activity.dart","src/models/deposito.dart","src/models/deposito.g.dart","src/models/nota_credito.dart","src/models/nota_credito.g.dart","src/models/cheque.dart","src/models/cheque.g.dart","src/models/adelanto.dart","src/models/adelanto.g.dart","src/models/factura.dart","src/models/factura.g.dart","src/models/search_result_error.dart","src/models/recibo.dart","src/models/recibo.g.dart","src/models/mocks/mocks.dart","src/models/mocks/mocks.g.dart","src/services/documentos_api_service.dart","src/services/ventas_api_service.dart","src/repositories/ventas_repo.dart","src/repositories/documentos_repo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8EAGyB,KAAqB;0BAAhB,QAAQ;AAAa,yFAAM,KAAK;EAAC;;;;6ECEtC,KAAqB;0BAAhB,QAAQ;AAAa,wFAAM,KAAK;EAAC;;;ICMxC;;;;;;cAMnB,MAAoC,EACpC,IAAwE;6CAD1C;oEACsC;AAEpE,YAAO,gBAAe,CACpB,uCAAC,MAAM,UAA+C,KACpD,iBAAQ,gBAAe,QAEzB,IAAI;IAER;iBAIE,UAAmE;uEAAV;AAEzD,gBAAK,CAAC,UAAU;IAClB;;iBAG0C,yDAAgB;IAAE;oBAGd,KAA2B;AAAE;2EAAP;AAClE,iEAAI,KAAK,GAAiB;AACxB,cAAa,aAAa,KAAK,KAAK;AACpC,cAAI,UAAU,UAAQ,EAAE;AACtB,+BAAM,yDAAgB;YAAtB;iBACK;AACL,+BAAM,2DAAkB;YAAxB;AACA,gBAAI;AACF,kBAAM,WAAU,MAAM,mBAAc,eAAe,CAAC,UAAU;AAC7D,wBAAK,CAAC,OAAO;AACd,iCAAM,2DAAkB,CAAC,OAAO;cAAhC;;kBACO;AAAO,AACd,wBAAK,CAAC,KAAK;AACX,mFAAM,KAAK,QACL,yDAAgB,CAAC,KAAK,QAAQ,QAC9B,yDAAgB,CAAC;cAFvB;;;;MAMR;;;;QA7CqC;yBAAc,GAAd,cAAc;;EAAE;;;;;;;;;;;;;;;;;;ICPxC;;;;;;IACK;;;;;;iBAOe,IAAW;AAAE;AAG5C,cAAO,4BAAY,CAAC;MAStB;;mBAE8B,IAAW;AACvC,UAAe,QAAQ,wBACrB,IAAI,kCAAQ,QACF,iCACI,sBACJ,gCACG,0BACE,SACf,IAAI,kCAAQ,QACF,8BACI,gBACJ,gCACG,0BACE,QACf,IAAI,kCAAQ,QACF,iCACI,gBACJ,gCACG,sBACE,SACf,IAAI,kCAAQ,QACF,6BACI,gBACJ,gCACG,sBACE,QACf,IAAI,kCAAQ,QACF,0BACI,sBACJ,gCACG,sBACE;AAEjB,YAAO,MAAK;IACd;;;QApDc;QACP,qDAAU;IAAV,cAAO,GAAP,OAAO;IACJ,iBAAU,GAAG,UAAU,WAAV,UAAU,GAAI,sBAAW;EAAE;;;;;;;;;;;;;;;ICThC;;;;;;oBAIU,IAAyB;AACnD,UAAM,kCAAS,aAAC,IAAI,QAAC,gBACb,2BAAC,QAAC,KAAa,IACf,wBAAK,SAAS,0BAAC,KAAK,gCACjB;AACX,iBAAO,yCAAW,UAAS,MAAM;IACnC;;;QARwB;iBAAM,GAAN,MAAM;EAAE;;;;;;;;ICFtB;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACS;;;;;;oBAIA,IAAY;AAChC,iBAAO,4BAAK,8BACN,IAAI,EAAC,0CACF,IAAI,EAAC,oDACE,IAAI,EAAC,sDACV,IAAI,EAAC,kDACJ,IAAI,EAAC,iDACP,IAAI,EAAC,gDACN,yBAAC,IAAI,EAAC,eACP,oCAAC,QAAC,IAAY,IACd,iCAAS,SAAS,0BAAC,IAAI,oCACpB;IAEb;;;QAfkB;QAAS;QAAY;QAAmB;QAAc;QAAa;QAAY;IAA/E,SAAE,GAAF,EAAE;IAAO,YAAK,GAAL,KAAK;IAAO,mBAAY,GAAZ,YAAY;IAAO,cAAO,GAAP,OAAO;IAAO,aAAM,GAAN,MAAM;IAAO,YAAK,GAAL,KAAK;IAAO,eAAQ,GAAR,QAAQ;EAAE;;;;;;;;;;;;;;;;;;;;ICR/F;;;;;;IACC;;;;;;IACH;;;;;;IACA;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;oBAUW,IAAY;AAClC,iBAAO,qCAAS,8BACV,IAAI,EAAC,4CACG,IAAI,EAAC,qDACP,IAAI,EAAC,gDACL,IAAI,EAAC,iDACP,IAAI,EAAC,iDACL,IAAI,EAAC,kDACF,IAAI,EAAC;IAEpB;;;QAlBuB;QACA;QACA;QACA;QACA;QACA;QACA;IANA,UAAE,GAAF,EAAE;IACF,eAAQ,GAAR,QAAQ;IACR,iBAAU,GAAV,UAAU;IACV,aAAM,GAAN,MAAM;IACN,eAAQ,GAAR,QAAQ;IACR,gBAAS,GAAT,SAAS;IACT,aAAM,GAAN,MAAM;EAAE;;;;;;;;;;;;;;;;;;;;IChBlB;;;;;;oBAIoB,IAAY;AAC3C,iBAAO,oDAAgB,sCACZ,IAAI,EAAC;IAElB;;;QAN6B;kBAAO,GAAP,OAAO;EAAE;;;;;;;;ICD5B;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACF;;;;;;oBAIc,IAAY;AACnC,iBAAO,kCAAQ,8BACT,IAAI,EAAC,yCACH,IAAI,EAAC,+CACD,IAAI,EAAC,+CACT,IAAI,EAAC,8CACF,IAAI,EAAC,+CACH,IAAI,EAAC;IAEpB;;;QAXe;QAAS;QAAW;QAAe;QAAW;QAAc;IAA5D,UAAE,GAAF,EAAE;IAAO,WAAI,GAAJ,IAAI;IAAO,eAAQ,GAAR,QAAQ;IAAO,WAAI,GAAJ,IAAI;IAAO,cAAO,GAAP,OAAO;IAAO,gBAAS,GAAT,SAAS;EAAE;;;;;;;;;;;;;;;;;;ICHlF;;;;;;IACG;;;;;;IACE;;;;;;IACF;;;;;;oBAImB,IAAyB;AAAE,YAAG,yCAAkB,CAAC,IAAI;IAAC;;YAC/C,uCAAgB,CAAC;IAAK;;iDAH9C,MAAW,EAAE,MAAW,EAAE,IAAS,EAAE,SAAc;IAA9C,aAAM,GAAN,MAAM;IAAO,aAAM,GAAN,MAAM;IAAO,YAAI,GAAJ,IAAI;IAAO,gBAAS,GAAT,SAAS;EAAC;;;;;;;;;;;;;;;;;sDCHnC,IAAyB;AACnD,eAAO,kCAAQ,aAAC,IAAI,QAAC,2BAAkB,IAAI,QAAC,YACxC,aAAQ,MAAM,gBAAC,IAAI,QAAC,0BAAoB,IAAI,QAAC;EACnD;oDAEsC,QAAiB;UAAK,2CACtD,UAAU,QAAQ,OAAO,EACzB,UAAU,QAAQ,OAAO,EACzB,QAAQ,QAAQ,KAAK,gBAAgB,IACrC,aAAa,QAAQ,UAAU;EAChC;;ICZI;;;;;;IACH;;;;;;IACA;;;;;;IACK;;;;;;IACF;;;;;;oBAQsB,IAAyB;AAAE,YAAG,gDAAqB,CAAC,IAAI;IAAC;;YACrD,8CAAmB,CAAC;IAAK;;wDAP9C,IAAS,EACT,MAAW,EACX,KAAU,EACV,KAAU,EACV,WAAgB;IAJX,WAAI,GAAJ,IAAI;IACJ,aAAM,GAAN,MAAM;IACN,YAAK,GAAL,KAAK;IACL,aAAK,GAAL,KAAK;IACL,kBAAW,GAAX,WAAW;EAAC;;;;;;;;;;;;;;;;;;;6DCRG,IAAyB;AACzD,eAAO,yCAAW,gBACd,IAAI,QAAC,sBACL,IAAI,QAAC,wBACL,IAAI,QAAC,WACL,aAAQ,MAAM,gBAAC,IAAI,QAAC,2BACpB,IAAI,QAAC;EACX;2DAEyC,QAAoB;UACzD,2CACE,QAAQ,QAAQ,KAAK,EACrB,UAAU,QAAQ,OAAO,EACzB,SAAS,QAAQ,MAAM,EACvB,SAAS,QAAQ,MAAM,gBAAgB,IACvC,eAAe,QAAQ,YAAY;EACpC;;IClBC;;;;;;IACG;;;;;;IACE;;;;;;IACF;;;;;;oBAIiB,IAAyB;AAAE,YAAG,qCAAgB,CAAC,IAAI;IAAC;;YAC3C,mCAAc,CAAC;IAAK;;6CAH9C,MAAW,EAAE,MAAW,EAAE,IAAS,EAAE,SAAc;IAA9C,cAAM,GAAN,MAAM;IAAO,cAAM,GAAN,MAAM;IAAO,YAAI,GAAJ,IAAI;IAAO,iBAAS,GAAT,SAAS;EAAC;;;;;;;;;;;;;;;;;kDCHrC,IAAyB;AAC/C,eAAO,8BAAM,aAAC,IAAI,QAAC,2BAAkB,IAAI,QAAC,YACtC,aAAQ,MAAM,gBAAC,IAAI,QAAC,0BAAoB,IAAI,QAAC;EACnD;gDAEoC,QAAe;UAAK,2CAClD,UAAU,QAAQ,OAAO,EACzB,UAAU,QAAQ,OAAO,EACzB,QAAQ,QAAQ,KAAK,gBAAgB,IACrC,aAAa,QAAQ,UAAU;EAChC;;ICZC;;;;;;IACG;;;;;;IACE;;;;;;oBAIiB,IAAyB;AAAE,YAAG,yCAAkB,CAAC,IAAI;IAAC;;YAC/C,uCAAgB,CAAC;IAAK;;iDAH9C,MAAW,EAAE,MAAW,EAAE,IAAS;IAA9B,cAAM,GAAN,MAAM;IAAO,cAAM,GAAN,MAAM;IAAO,YAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;;;;sDCFnB,IAAyB;AACnD,eAAO,kCAAQ,aAAC,IAAI,QAAC,2BAAkB,IAAI,QAAC,YACxC,aAAQ,MAAM,gBAAC,IAAI,QAAC;EAC1B;oDAEsC,QAAiB;UAAK,2CACtD,UAAU,QAAQ,OAAO,EACzB,UAAU,QAAQ,OAAO,EACzB,QAAQ,QAAQ,KAAK,gBAAgB;EACtC;;ICXC;;;;;;IACG;;;;;;IACH;;;;;;IACK;;;;;;IACF;;;;;;IACA;;;;;;IACA;;;;;;oBAUkB,IAAyB;AAAE,YAAG,uCAAiB,CAAC,IAAI;IAAC;;YAC7C,qCAAe,CAAC;IAAK;;+CAT9C,MAAW,EACX,WAAgB,EAChB,KAAU,EACV,KAAU,EACV,aAAkB,EAClB,MAAW,EACX,SAAc;IANT,cAAM,GAAN,MAAM;IACN,mBAAW,GAAX,WAAW;IACX,aAAK,GAAL,KAAK;IACL,aAAK,GAAL,KAAK;IACL,oBAAa,GAAb,aAAa;IACb,cAAM,GAAN,MAAM;IACN,gBAAS,GAAT,SAAS;EAAC;;;;;;;;;;;;;;;;;;;;;;;oDCZC,IAAyB;AACjD,eAAO,gCAAO,aACV,IAAI,QAAC,2BACL,IAAI,QAAC,6BACL,IAAI,QAAC,WACL,aAAQ,MAAM,gBAAC,IAAI,QAAC,2BACpB,IAAI,QAAC,kCACL,IAAI,QAAC,2BACL,IAAI,QAAC;EACX;kDAEqC,QAAgB;UAAK,2CACpD,UAAU,QAAQ,OAAO,EACzB,eAAe,QAAQ,YAAY,EACnC,SAAS,QAAQ,MAAM,EACvB,SAAS,QAAQ,MAAM,gBAAgB,IACvC,iBAAiB,QAAQ,cAAc,EACvC,UAAU,QAAQ,OAAO,EACzB,aAAa,QAAQ,UAAU;EAChC;;IC1BU;;;;;;oBAIqB,IAAY;AAC5C,iBAAO,sDAAiB,sCACb,IAAI,EAAC;IAElB;;;QAN8B;mBAAO,GAAP,OAAO;EAAE;;;;;;;;ICIhC;;;;;;IACH;;;;;;IACA;;;;;;IACA;;;;;;IACW;;;;;;IACF;;;;;;IACK;;;;;;IACH;;;;;;oBAKS,IAAyB;AAAE,YAAG,qCAAgB,CAAC,IAAI;IAAC;;YAC3C,mCAAc,CAAC;IAAK;;6CAJ9C,IAAS,EAAE,MAAW,EAAE,MAAW,EAAE,UAAe,EAC3D,QAAa,EAAE,MAAW,EAAE,UAAe,EAAE,OAAY;IAD7C,WAAI,GAAJ,IAAI;IAAO,cAAM,GAAN,MAAM;IAAO,cAAM,GAAN,MAAM;IAAO,iBAAU,GAAV,UAAU;IACtD,eAAQ,GAAR,QAAQ;IAAO,aAAM,GAAN,MAAM;IAAO,iBAAU,GAAV,UAAU;IAAO,cAAO,GAAP,OAAO;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;kDCTpC,IAAyB;AAC/C,eAAO,8BAAM,gBACT,IAAI,QAAC,sBACL,IAAI,QAAC,wBACL,IAAI,QAAC,wBACL,IAAI,QAAC,4CACL,aAAC,IAAI,QAAC,kBACE,iCAAC,QAAC,CAAC,IAAK,uCAAiB,0BAAC,CAAC,mCACxB,8BACX,aAAC,IAAI,QAAC,gBACE,6BAAC,QAAC,CAAC,IAAK,mCAAe,0BAAC,CAAC,iCACtB,mCACX,aAAC,IAAI,QAAC,oBACE,wCAAC,QAAC,CAAC,IAAK,8CAAoB,0BAAC,CAAC,sCAC3B,gCACX,aAAC,IAAI,QAAC,iBACE,iCAAC,QAAC,CAAC,IAAK,uCAAiB,0BAAC,CAAC,mCACxB;EACjB;gDAEoC,QAAe;UAAK,2CAClD,QAAQ,QAAQ,KAAK,EACrB,UAAU,QAAQ,OAAO,EACzB,UAAU,QAAQ,OAAO,EACzB,cAAc,QAAQ,WAAW,EACjC,YAAY,QAAQ,SAAS,EAC7B,UAAU,QAAQ,OAAO,EACzB,cAAc,QAAQ,WAAW,EACjC,WAAW,QAAQ,QAAQ;EAC5B;;;YCjCwC,kDAAuB;;;;;YAGtB,mDAAwB;;;;MCChE,iDAAuB;YAAG,iBAC9B,yCACE,QAAQ,GACR,UAAU,KACV,UAAU,OACV,cAAc,MACd,YAAY,gBACV,yCAAC,UAAU,KAAK,UAAU,KAAK,QAAQ,cAAc,aAAa,8BAEpE,UAAU,kCACV,WAAW,kCACX,cAAc,oCAEhB,yCACE,QAAQ,GACR,UAAU,KACV,UAAU,OACV,cAAc,MACd,YAAY,kCACZ,UAAU,gBACR,yCACE,UAAU,UACV,UAAU,QACV,QAAQ,cACR,aAAa,8BAGjB,WAAW,kCACX,cAAc;;MAIZ,kDAAwB;YAAG,iBAC/B,yCACE,UAAU,QACV,eAAe,wBACf,SAAS,OACT,SAAS,cACT,iBAAiB,IACjB,UAAU,aACV,aAAa,YAEf,yCACE,UAAU,QACV,eAAe,8BACf,SAAS,OACT,SAAS,cACT,iBAAiB,IACjB,UAAU,aACV,aAAa;;;;ICnDR;;;;;;mBAE8B,IAAW;AAAE;AAChD,kBAAK,CAAC;AACN,YAAM,YAAW,MAAM,WAAM,IACrB,CAAC;AACT,kBAAK,eAAC,QAAQ,KAAK;AACnB,YAAI,QAAQ,WAAW,KAAI,KAAK;AAE7B,oBAAK,CAAC;AAEP,cAAI,sCAAW,qCAAW,MACpB,+BAAC,QAAC,CAAC,IAAK,qCAAgB,CAAC,CAAC,6CACvB;AAIT,gBAAO,SAAQ;eAEV;AAEL,qBAAM,kBAAS,CAAC;;MAEpB;;;;IAvBO,YAAM,GAAG,sBAAM;EA0BxB;;;;;;;;;;;;IC1BS;;;;;;;AAE+B;AACpC,kBAAK,CAAC;AACN,YAAM,YAAW,MAAM,WAAM,IACrB,CAAC;AACT,kBAAK,eAAC,QAAQ,KAAK;AACnB,YAAI,QAAQ,WAAW,KAAI,KAAK;AAE9B,cAAI,qCAAW,oCAAU,MACnB,6BAAC,QAAC,CAAC,IAAK,mCAAe,CAAC,CAAC,4CACtB;AAET,gBAAO,SAAQ;eACV;AAEL,qBAAM,kBAAS,CAAC;;MAEpB;;;;IAlBO,aAAM,GAAG,sBAAM;EAqBxB;;;;;;;;;;;;ICvBQ;;;;;;;YAEgC,kBAAY,eAAe;IAAE;;;IAF7D,kBAAY,OAAG,sDAAgB;EAIvC;;;;;;;;;;;;ICJQ;;;;;;mBAEgC,IAAW;YAAK,uBAAiB,eAAe,CAAC,IAAI;IAAC;;;IAFtF,uBAAiB,OAAG,8DAAoB;EAIhD;;;;;;;;;;;;I3BDe;;;;;;;YAKQ,mCAAsB,SAAI;IAAG;;;QAHhC;eAAI,GAAJ,IAAI;AAAK,+EAAM,CAAC,IAAI;EAAE;;;;;;;;;;YCCnB;IAAkB;;;;EACzC;;;;;YAIuB;IAAoB;;;;EAC3C;;;;IAGsB;;;;;;;YAKC,2CAA+B,eAAU,SAAO;IAAI;;0EAHtD,UAAe;IAAV,iBAAU,GAAV,UAAU;AAAI,qFAAM,CAAC,UAAU;EAAE;;;;;;;;;IAO5C;;;;;;;YAKQ;IAAkB;;wEAHtB,KAAU;IAAL,YAAK,GAAL,KAAK;AAAI,mFAAM,CAAC,KAAK;EAAE","file":"common_sales_managemnet.ddc.js"}');
  // Exports:
  return {
    src__blocs__documentos_bloc: src__blocs__documentos_bloc,
    src__ventas_client: src__ventas_client,
    src__models__order_result: src__models__order_result,
    src__models__order: src__models__order,
    common_sales_managemnet: common_sales_managemnet,
    src__models__order_item: src__models__order_item,
    src__models__order_result_error: src__models__order_result_error,
    src__models__activity: src__models__activity,
    src__models__deposito: src__models__deposito,
    src__models__nota_credito: src__models__nota_credito,
    src__models__cheque: src__models__cheque,
    src__models__adelanto: src__models__adelanto,
    src__models__factura: src__models__factura,
    src__models__search_result_error: src__models__search_result_error,
    src__models__recibo: src__models__recibo,
    src__models__models: src__models__models,
    src__models__mocks__mocks: src__models__mocks__mocks,
    src__services__documentos_api_service: src__services__documentos_api_service,
    src__services__ventas_api_service: src__services__ventas_api_service,
    src__services__services: src__services__services,
    src__repositories__ventas_repo: src__repositories__ventas_repo,
    src__repositories__documentos_repo: src__repositories__documentos_repo,
    src__blocs__events__documentos_events: src__blocs__events__documentos_events,
    src__blocs__states__documentos_state: src__blocs__states__documentos_state
  };
});

//# sourceMappingURL=common_sales_managemnet.ddc.js.map
