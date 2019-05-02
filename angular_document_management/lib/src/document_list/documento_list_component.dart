import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_bloc/angular_bloc.dart';
import 'package:angular_forms/angular_forms.dart';

import 'package:common_sales_management/common_sales_managemnet.dart';
import 'package:rxdart/rxdart.dart';

@Component(
  selector: 'documento-list',
  styleUrls: [
    'package:angular_components/css/mdc_web/card/mdc-card.scss.css',
    'package:angular_components/app_layout/layout.scss.css',
    'documento_list_component.css'
  ],
  templateUrl: 'documento_list_component.html',
  directives: [
    MaterialButtonComponent,
    MaterialIconComponent,
    MaterialTemporaryDrawerComponent,
    MaterialAutoSuggestInputComponent,
    MaterialButtonComponent,
    MaterialCheckboxComponent,
    MaterialDropdownSelectComponent,
    MaterialExpansionPanel,
    MaterialExpansionPanelAutoDismiss,
    MaterialExpansionPanelSet,
    formDirectives,
    materialInputDirectives,
    NgIf,
    NgFor,
  ],
  pipes: [BlocPipe],
  providers: const [
    popupBindings,
  ],
)
class DocumentoListComponent implements OnInit, OnDestroy {
  DocumentosSearchBloc docSearchBloc;
  SearchStateSuccess state;

  final myOptions = ['Foo', 'Bar', 'Baz'];
  String myInput = 'Bar';

  @override
  void ngOnInit() {
    final docRecpo = DocumentosRepo();
    state = SearchStateSuccess([]);

    docSearchBloc = DocumentosSearchBloc(
      documentosRepo: docRecpo,
    );
    docSearchBloc.dispatch(TextChanged(text: "1"));

    docSearchBloc.state.listen((s) {
      if (s is SearchStateSuccess) {
        state = s;
      }
    });
  }

  @override
  void ngOnDestroy() {
    docSearchBloc.dispose();
  }
}
