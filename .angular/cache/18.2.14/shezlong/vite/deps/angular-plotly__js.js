import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-S3RKEIVT.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  IterableDiffers,
  KeyValueDiffers,
  NgModule,
  Output,
  ViewChild,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-J2KZDJXE.js";
import {
  __async,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/angular-plotly.js/fesm2022/angular-plotly.js.mjs
var _c0 = ["plot"];
var _c1 = ["*"];
var PlotlyService = class _PlotlyService {
  static {
    this.instances = [];
  }
  static {
    this.plotly = void 0;
  }
  static {
    this.moduleName = void 0;
  }
  static setModuleName(moduleName) {
    _PlotlyService.moduleName = moduleName;
  }
  static getModuleName() {
    return _PlotlyService.moduleName;
  }
  static setPlotly(plotly) {
    if (typeof plotly === "object" && typeof plotly.react !== "function") {
      throw new Error("Invalid plotly.js version. Please, use any version above 1.40.0");
    }
    _PlotlyService.plotly = plotly;
  }
  static insert(instance) {
    const index = _PlotlyService.instances.indexOf(instance);
    if (index === -1) {
      _PlotlyService.instances.push(instance);
    }
    return instance;
  }
  static remove(div) {
    const index = _PlotlyService.instances.indexOf(div);
    if (index >= 0) {
      _PlotlyService.instances.splice(index, 1);
      _PlotlyService.plotly.purge(div);
    }
  }
  getInstanceByDivId(id) {
    for (const instance of _PlotlyService.instances) {
      if (instance && instance.id === id) {
        return instance;
      }
    }
    return void 0;
  }
  getPlotly() {
    return __async(this, null, function* () {
      yield this.waitFor(() => this._getPlotly() !== "waiting");
      return this._getPlotly();
    });
  }
  _getPlotly() {
    if (typeof _PlotlyService.plotly === "undefined") {
      const msg = _PlotlyService.moduleName === "ViaCDN" ? `Error loading Peer dependency plotly.js from CDN url` : `Peer dependency plotly.js isn't installed`;
      throw new Error(msg);
    }
    return _PlotlyService.plotly;
  }
  waitFor(fn) {
    return new Promise((resolve) => {
      const localFn = () => {
        fn() ? resolve() : setTimeout(localFn, 10);
      };
      localFn();
    });
  }
  newPlot(div, data, layout, config, frames) {
    return __async(this, null, function* () {
      yield this.waitFor(() => this._getPlotly() !== "waiting");
      if (frames) {
        const obj = {
          data,
          layout,
          config,
          frames
        };
        return this._getPlotly().newPlot(div, obj).then(() => _PlotlyService.insert(div));
      }
      return this._getPlotly().newPlot(div, data, layout, config).then(() => _PlotlyService.insert(div));
    });
  }
  plot(div, data, layout, config, frames) {
    if (frames) {
      const obj = {
        data,
        layout,
        config,
        frames
      };
      return this._getPlotly().newPlot(div, obj);
    }
    return this._getPlotly().newPlot(div, data, layout, config);
  }
  update(div, data, layout, config, frames) {
    if (frames) {
      const obj = {
        data,
        layout,
        config,
        frames
      };
      return this._getPlotly().react(div, obj);
    }
    return this._getPlotly().react(div, data, layout, config);
  }
  resize(div) {
    return this._getPlotly().Plots.resize(div);
  }
  static {
    this.ɵfac = function PlotlyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlotlyService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PlotlyService,
      factory: _PlotlyService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlotlyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PlotlyThemeLoaderService = class _PlotlyThemeLoaderService {
  constructor() {
    this._isLoading = false;
  }
  get isLoading() {
    return this._isLoading;
  }
  load(themeName) {
    this._isLoading = true;
    return new Promise((resolve) => {
      resolve(true);
    });
  }
  static {
    this.ɵfac = function PlotlyThemeLoaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlotlyThemeLoaderService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PlotlyThemeLoaderService,
      factory: _PlotlyThemeLoaderService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlotlyThemeLoaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PlotlyComponent = class _PlotlyComponent {
  constructor(plotly, themeLoader, iterableDiffers, keyValueDiffers) {
    this.plotly = plotly;
    this.themeLoader = themeLoader;
    this.iterableDiffers = iterableDiffers;
    this.keyValueDiffers = keyValueDiffers;
    this.defaultClassName = "js-plotly-plot";
    this.theme = "none";
    this.revision = 0;
    this.debug = false;
    this.useResizeHandler = false;
    this.updateOnLayoutChange = true;
    this.updateOnDataChange = true;
    this.updateOnlyWithRevision = false;
    this.initialized = new EventEmitter();
    this.update = new EventEmitter();
    this.purge = new EventEmitter();
    this.error = new EventEmitter();
    this.afterExport = new EventEmitter();
    this.afterPlot = new EventEmitter();
    this.animated = new EventEmitter();
    this.animatingFrame = new EventEmitter();
    this.animationInterrupted = new EventEmitter();
    this.autoSize = new EventEmitter();
    this.beforeExport = new EventEmitter();
    this.beforeHover = new EventEmitter();
    this.buttonClicked = new EventEmitter();
    this.click = new EventEmitter();
    this.plotlyClick = new EventEmitter();
    this.clickAnnotation = new EventEmitter();
    this.deselect = new EventEmitter();
    this.doubleClick = new EventEmitter();
    this.framework = new EventEmitter();
    this.hover = new EventEmitter();
    this.legendClick = new EventEmitter();
    this.legendDoubleClick = new EventEmitter();
    this.react = new EventEmitter();
    this.relayout = new EventEmitter();
    this.relayouting = new EventEmitter();
    this.restyle = new EventEmitter();
    this.redraw = new EventEmitter();
    this.selected = new EventEmitter();
    this.selecting = new EventEmitter();
    this.sliderChange = new EventEmitter();
    this.sliderEnd = new EventEmitter();
    this.sliderStart = new EventEmitter();
    this.sunburstclick = new EventEmitter();
    this.transitioning = new EventEmitter();
    this.transitionInterrupted = new EventEmitter();
    this.unhover = new EventEmitter();
    this.treemapclick = new EventEmitter();
    this.webglcontextlost = new EventEmitter();
    this.eventNames = ["afterExport", "afterPlot", "animated", "animatingFrame", "animationInterrupted", "autoSize", "beforeExport", "beforeHover", "buttonClicked", "clickAnnotation", "deselect", "doubleClick", "framework", "hover", "legendClick", "legendDoubleClick", "react", "relayout", "relayouting", "restyle", "redraw", "selected", "selecting", "sliderChange", "sliderEnd", "sliderStart", "sunburstclick", "transitioning", "transitionInterrupted", "unhover", "treemapclick", "webglcontextlost"];
  }
  ngOnInit() {
    this.createPlot().then(() => {
      const figure = this.createFigure();
      this.initialized.emit(figure);
    });
    if (this.click.observers.length > 0) {
      const msg = "DEPRECATED: Reconsider using `(plotlyClick)` instead of `(click)` to avoid event conflict. Please check https://github.com/plotly/angular-plotly.js#FAQ";
      console.error(msg);
    }
  }
  ngOnDestroy() {
    if (typeof this.resizeHandler === "function") {
      this.getWindow().removeEventListener("resize", this.resizeHandler);
      this.resizeHandler = void 0;
    }
    if (this.plotlyInstance) {
      const figure = this.createFigure();
      this.purge.emit(figure);
      PlotlyService.remove(this.plotlyInstance);
    }
  }
  ngOnChanges(changes) {
    let shouldUpdate = false;
    const revision = changes["revision"];
    if (revision && !revision.isFirstChange()) {
      shouldUpdate = true;
    }
    const debug = changes["debug"];
    if (debug && !debug.isFirstChange()) {
      shouldUpdate = true;
    }
    if (shouldUpdate) {
      this.updatePlot();
    }
    this.updateWindowResizeHandler();
  }
  ngDoCheck() {
    if (this.updateOnlyWithRevision) {
      return false;
    }
    let shouldUpdate = false;
    if (this.updateOnLayoutChange) {
      if (this.layoutDiffer) {
        const layoutHasDiff = this.layoutDiffer.diff(this.layout);
        if (layoutHasDiff) {
          shouldUpdate = true;
        }
      } else if (this.layout) {
        this.layoutDiffer = this.keyValueDiffers.find(this.layout).create();
      } else {
        this.layoutDiffer = void 0;
      }
    }
    if (this.updateOnDataChange) {
      if (this.dataDiffer) {
        const dataHasDiff = this.dataDiffer.diff(this.data);
        if (dataHasDiff) {
          shouldUpdate = true;
        }
      } else if (Array.isArray(this.data)) {
        this.dataDiffer = this.iterableDiffers.find(this.data).create(this.dataDifferTrackBy);
      } else {
        this.dataDiffer = void 0;
      }
    }
    if (shouldUpdate && this.plotlyInstance) {
      this.updatePlot();
    }
  }
  getData() {
    return this.data ?? [];
  }
  getWindow() {
    return window;
  }
  getClassName() {
    let classes = [this.defaultClassName];
    if (Array.isArray(this.className)) {
      classes = classes.concat(this.className);
    } else if (this.className) {
      classes.push(this.className);
    }
    return classes.join(" ");
  }
  createPlot() {
    return this.plotly.newPlot(this.plotEl.nativeElement, this.getData(), this.layout, this.config, this.frames).then((plotlyInstance) => {
      this.plotlyInstance = plotlyInstance;
      this.getWindow().gd = this.debug ? plotlyInstance : void 0;
      this.eventNames.forEach((name) => {
        const eventName = `plotly_${name.toLowerCase()}`;
        const event = this[name];
        plotlyInstance.on(eventName, (data) => event.emit(data));
      });
      plotlyInstance.on("plotly_click", (data) => {
        this.plotlyClick.emit(data);
      });
      this.updateWindowResizeHandler();
    }, (err) => {
      console.error("Error while plotting:", err);
      this.error.emit(err);
    });
  }
  createFigure() {
    const p = this.plotlyInstance;
    const figure = {
      data: p.data,
      layout: p.layout,
      frames: p._transitionData ? p._transitionData._frames : null
    };
    return figure;
  }
  updatePlot() {
    if (!this.plotlyInstance) {
      const error = new Error(`Plotly component wasn't initialized`);
      this.error.emit(error);
      throw error;
    }
    const layout = __spreadValues({}, this.layout);
    return this.plotly.update(this.plotlyInstance, this.getData(), layout, this.config, this.frames).then(() => {
      const figure = this.createFigure();
      this.update.emit(figure);
    }, (err) => {
      console.error("Error while updating plot:", err);
      this.error.emit(err);
    });
  }
  updateWindowResizeHandler() {
    if (this.useResizeHandler) {
      if (this.resizeHandler === void 0) {
        this.resizeHandler = () => this.plotly.resize(this.plotlyInstance);
        this.getWindow().addEventListener("resize", this.resizeHandler);
      }
    } else {
      if (typeof this.resizeHandler === "function") {
        this.getWindow().removeEventListener("resize", this.resizeHandler);
        this.resizeHandler = void 0;
      }
    }
  }
  dataDifferTrackBy(_, item) {
    const obj = Object.assign({}, item, {
      uid: ""
    });
    return JSON.stringify(obj);
  }
  loadTheme() {
    if (this.layout !== void 0) {
      const msg = "You fulfill both `theme` and `layout` properties. This will overwrite the `layout` data with the `theme` data.";
      console.warn(msg);
    }
    this.themeLoader.load(this.theme).then((theme) => this.layout = theme);
  }
  static {
    this.ɵfac = function PlotlyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlotlyComponent)(ɵɵdirectiveInject(PlotlyService), ɵɵdirectiveInject(PlotlyThemeLoaderService), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(KeyValueDiffers));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PlotlyComponent,
      selectors: [["plotly-plot"]],
      viewQuery: function PlotlyComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.plotEl = _t.first);
        }
      },
      inputs: {
        data: "data",
        layout: "layout",
        config: "config",
        frames: "frames",
        style: "style",
        theme: "theme",
        divId: "divId",
        revision: "revision",
        className: "className",
        debug: "debug",
        useResizeHandler: "useResizeHandler",
        updateOnLayoutChange: "updateOnLayoutChange",
        updateOnDataChange: "updateOnDataChange",
        updateOnlyWithRevision: "updateOnlyWithRevision"
      },
      outputs: {
        initialized: "initialized",
        update: "update",
        purge: "purge",
        error: "error",
        afterExport: "afterExport",
        afterPlot: "afterPlot",
        animated: "animated",
        animatingFrame: "animatingFrame",
        animationInterrupted: "animationInterrupted",
        autoSize: "autoSize",
        beforeExport: "beforeExport",
        beforeHover: "beforeHover",
        buttonClicked: "buttonClicked",
        click: "click",
        plotlyClick: "plotlyClick",
        clickAnnotation: "clickAnnotation",
        deselect: "deselect",
        doubleClick: "doubleClick",
        framework: "framework",
        hover: "hover",
        legendClick: "legendClick",
        legendDoubleClick: "legendDoubleClick",
        react: "react",
        relayout: "relayout",
        relayouting: "relayouting",
        restyle: "restyle",
        redraw: "redraw",
        selected: "selected",
        selecting: "selecting",
        sliderChange: "sliderChange",
        sliderEnd: "sliderEnd",
        sliderStart: "sliderStart",
        sunburstclick: "sunburstclick",
        transitioning: "transitioning",
        transitionInterrupted: "transitionInterrupted",
        unhover: "unhover",
        treemapclick: "treemapclick",
        webglcontextlost: "webglcontextlost"
      },
      features: [ɵɵProvidersFeature([PlotlyService]), ɵɵNgOnChangesFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 3,
      consts: [["plot", ""], [3, "ngClass", "ngStyle"]],
      template: function PlotlyComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngClass", ctx.getClassName())("ngStyle", ctx.style);
          ɵɵattribute("id", ctx.divId);
        }
      },
      dependencies: [NgClass, NgStyle],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlotlyComponent, [{
    type: Component,
    args: [{
      selector: "plotly-plot",
      template: `<div #plot [attr.id]="divId" [ngClass]="getClassName()" [ngStyle]="style">
      <ng-content></ng-content>
    </div>`,
      providers: [PlotlyService]
    }]
  }], function() {
    return [{
      type: PlotlyService
    }, {
      type: PlotlyThemeLoaderService
    }, {
      type: IterableDiffers
    }, {
      type: KeyValueDiffers
    }];
  }, {
    plotEl: [{
      type: ViewChild,
      args: ["plot", {
        static: true
      }]
    }],
    data: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    frames: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    divId: [{
      type: Input
    }],
    revision: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    debug: [{
      type: Input
    }],
    useResizeHandler: [{
      type: Input
    }],
    updateOnLayoutChange: [{
      type: Input
    }],
    updateOnDataChange: [{
      type: Input
    }],
    updateOnlyWithRevision: [{
      type: Input
    }],
    initialized: [{
      type: Output
    }],
    update: [{
      type: Output
    }],
    purge: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    afterExport: [{
      type: Output
    }],
    afterPlot: [{
      type: Output
    }],
    animated: [{
      type: Output
    }],
    animatingFrame: [{
      type: Output
    }],
    animationInterrupted: [{
      type: Output
    }],
    autoSize: [{
      type: Output
    }],
    beforeExport: [{
      type: Output
    }],
    beforeHover: [{
      type: Output
    }],
    buttonClicked: [{
      type: Output
    }],
    click: [{
      type: Output
    }],
    plotlyClick: [{
      type: Output
    }],
    clickAnnotation: [{
      type: Output
    }],
    deselect: [{
      type: Output
    }],
    doubleClick: [{
      type: Output
    }],
    framework: [{
      type: Output
    }],
    hover: [{
      type: Output
    }],
    legendClick: [{
      type: Output
    }],
    legendDoubleClick: [{
      type: Output
    }],
    react: [{
      type: Output
    }],
    relayout: [{
      type: Output
    }],
    relayouting: [{
      type: Output
    }],
    restyle: [{
      type: Output
    }],
    redraw: [{
      type: Output
    }],
    selected: [{
      type: Output
    }],
    selecting: [{
      type: Output
    }],
    sliderChange: [{
      type: Output
    }],
    sliderEnd: [{
      type: Output
    }],
    sliderStart: [{
      type: Output
    }],
    sunburstclick: [{
      type: Output
    }],
    transitioning: [{
      type: Output
    }],
    transitionInterrupted: [{
      type: Output
    }],
    unhover: [{
      type: Output
    }],
    treemapclick: [{
      type: Output
    }],
    webglcontextlost: [{
      type: Output
    }]
  });
})();
var PlotlySharedModule = class _PlotlySharedModule {
  constructor() {
  }
  static {
    this.ɵfac = function PlotlySharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlotlySharedModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PlotlySharedModule,
      declarations: [PlotlyComponent],
      imports: [CommonModule],
      exports: [PlotlyComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [PlotlyService],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlotlySharedModule, [{
    type: NgModule,
    args: [{
      declarations: [PlotlyComponent],
      imports: [CommonModule],
      providers: [PlotlyService],
      exports: [PlotlyComponent]
    }]
  }], function() {
    return [];
  }, null);
})();
var PlotlyModule = class _PlotlyModule {
  static {
    this.plotlyjs = {};
  }
  constructor() {
    if (!this.isValid()) {
      const msg = "Invalid PlotlyJS object. Please check https://github.com/plotly/angular-plotly.js#quick-start to see how to add PlotlyJS to your project.";
      throw new Error(msg);
    }
    PlotlyService.setPlotly(_PlotlyModule.plotlyjs);
  }
  isValid() {
    return _PlotlyModule.plotlyjs !== void 0 && (typeof _PlotlyModule.plotlyjs.plot === "function" || typeof _PlotlyModule.plotlyjs.newPlot === "function");
  }
  static {
    this.ɵfac = function PlotlyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlotlyModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PlotlyModule,
      imports: [CommonModule, PlotlySharedModule],
      exports: [PlotlySharedModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [PlotlyService],
      imports: [CommonModule, PlotlySharedModule, PlotlySharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlotlyModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, PlotlySharedModule],
      providers: [PlotlyService],
      exports: [PlotlySharedModule]
    }]
  }], function() {
    return [];
  }, null);
})();
var PlotlyViaCDNModule = class _PlotlyViaCDNModule {
  static {
    this.plotlyBundle = void 0;
  }
  static {
    this.plotlyVersion = "latest";
  }
  static {
    this.plotlyBundleNames = ["basic", "cartesian", "geo", "gl3d", "gl2d", "mapbox", "finance"];
  }
  constructor(plotlyService) {
    this.plotlyService = plotlyService;
    PlotlyService.setModuleName("ViaCDN");
  }
  static setPlotlyVersion(version, cdnProvider = "plotly", cdnURL = "") {
    const isOk = version === "latest" || /^(strict-)?\d\.\d{1,2}\.\d{1,2}$/.test(version);
    if (!isOk) {
      throw new Error(`Invalid plotly version. Please set 'latest' or version number (i.e.: 1.4.3) or strict version number (i.e.: strict-1.4.3)`);
    }
    _PlotlyViaCDNModule.loadViaCDN(cdnProvider, cdnURL);
    _PlotlyViaCDNModule.plotlyVersion = version;
  }
  static setPlotlyBundle(bundle) {
    const isOk = bundle === null || _PlotlyViaCDNModule.plotlyBundleNames.indexOf(bundle) >= 0;
    if (!isOk) {
      const names = _PlotlyViaCDNModule.plotlyBundleNames.map((n) => `"${n}"`).join(", ");
      throw new Error(`Invalid plotly bundle. Please set to null for full or ${names} for a partial bundle.`);
    }
    _PlotlyViaCDNModule.plotlyBundle = bundle;
  }
  static loadViaCDN(cdnProvider = "plotly", cdnURL = "") {
    PlotlyService.setPlotly("waiting");
    const init = () => {
      let src = "";
      switch (cdnProvider) {
        case "cloudflare":
          if (_PlotlyViaCDNModule.plotlyVersion == "latest") {
            throw new Error(`As cloudflare hosts version specific files, 'latest' as a version is not supported. Please specify a version or you can choose 'plotly' as a CDN provider.`);
          }
          src = _PlotlyViaCDNModule.plotlyBundle == null ? `https://cdnjs.cloudflare.com/ajax/libs/plotly.js/${_PlotlyViaCDNModule.plotlyVersion}/plotly.min.js` : `https://cdnjs.cloudflare.com/ajax/libs/plotly.js/${_PlotlyViaCDNModule.plotlyVersion}/plotly-${_PlotlyViaCDNModule.plotlyBundle}.min.js`;
          break;
        case "custom":
          if (!(!!cdnURL && typeof cdnURL === "string")) {
            throw new Error(`Invalid or missing CDN URL. Please provide a CDN URL in case of custom provider. Alternatively, you can choose from 'plotly' or 'cloudflare'.`);
          }
          src = cdnURL;
          break;
        default:
          src = _PlotlyViaCDNModule.plotlyBundle == null ? `https://cdn.plot.ly/plotly-${_PlotlyViaCDNModule.plotlyVersion}.min.js` : `https://cdn.plot.ly/plotly-${_PlotlyViaCDNModule.plotlyBundle}-${_PlotlyViaCDNModule.plotlyVersion}.min.js`;
          break;
      }
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.onerror = () => console.error(`Error loading plotly.js library from ${src}`);
      const head = document.getElementsByTagName("head")[0];
      head.appendChild(script);
      let counter = 200;
      const fn = () => {
        const plotly = window.Plotly;
        if (plotly) {
          PlotlyService.setPlotly(plotly);
        } else if (counter > 0) {
          counter--;
          setTimeout(fn, 50);
        } else {
          throw new Error(`Error loading plotly.js library from ${src}. Timeout.`);
        }
      };
      fn();
    };
    setTimeout(init);
  }
  static {
    this.ɵfac = function PlotlyViaCDNModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlotlyViaCDNModule)(ɵɵinject(PlotlyService));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PlotlyViaCDNModule,
      imports: [CommonModule, PlotlySharedModule],
      exports: [PlotlySharedModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [PlotlyService],
      imports: [CommonModule, PlotlySharedModule, PlotlySharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlotlyViaCDNModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, PlotlySharedModule],
      providers: [PlotlyService],
      exports: [PlotlySharedModule]
    }]
  }], function() {
    return [{
      type: PlotlyService
    }];
  }, null);
})();
var PlotlyViaWindowModule = class _PlotlyViaWindowModule {
  constructor() {
    const plotly = window.Plotly;
    if (typeof plotly === "undefined") {
      throw new Error(`Plotly object not found on window.`);
    }
    PlotlyService.setPlotly(plotly);
  }
  static {
    this.ɵfac = function PlotlyViaWindowModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlotlyViaWindowModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PlotlyViaWindowModule,
      imports: [CommonModule, PlotlySharedModule],
      exports: [PlotlySharedModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [PlotlyService],
      imports: [CommonModule, PlotlySharedModule, PlotlySharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlotlyViaWindowModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, PlotlySharedModule],
      providers: [PlotlyService],
      exports: [PlotlySharedModule]
    }]
  }], function() {
    return [];
  }, null);
})();
export {
  PlotlyComponent,
  PlotlyModule,
  PlotlyService,
  PlotlySharedModule,
  PlotlyViaCDNModule,
  PlotlyViaWindowModule
};
//# sourceMappingURL=angular-plotly__js.js.map
