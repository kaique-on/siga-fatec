

gx.evt.autoSkip = !1;
gx.define("applogin", !1, function () {
  var n, t;
  this.ServerClass = "applogin";
  this.PackageName = "GeneXus.Programs";
  this.ServerFullClass = "applogin.aspx";
  this.setObjectType("web");
  this.hasEnterEvent = !1;
  this.skipOnEnter = !1;
  this.autoRefresh = !0;
  this.fullAjax = !0;
  this.supportAjaxEvents = !0;
  this.ajaxSecurityToken = !0;
  this.DSO = "CEETEPS_ALUNO";
  this.SetStandaloneVars = function () {};
  this.s112_client = function () {
    return this.executeClientEvent(function () {}, arguments);
  };
  this.e111n2_client = function () {
    return this.executeServerEvent("BOOTSTRAPCLICK1.CLICK", !1, null, !0, !0);
  };
  this.e141n2_client = function () {
    return this.executeServerEvent("ENTER", !0, null, !1, !1);
  };
  this.e151n2_client = function () {
    return this.executeServerEvent("CANCEL", !0, null, !1, !1);
  };
  this.GXValidFnc = [];
  n = this.GXValidFnc;
  this.GXCtrlIds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  this.GXLastCtrlId = 11;
  this.BOOTSTRAPCLICK1Container = gx.uc.getNew(
    this,
    12,
    0,
    "BootstrapClick",
    "BOOTSTRAPCLICK1Container",
    "Bootstrapclick1",
    "BOOTSTRAPCLICK1"
  );
  t = this.BOOTSTRAPCLICK1Container;
  t.setProp("Class", "Class", "", "char");
  t.setProp("Enabled", "Enabled", !0, "boolean");
  t.setProp("ButtonId", "Buttonid", "", "str");
  t.setProp("Visible", "Visible", !0, "bool");
  t.setProp("Gx Control Type", "Gxcontroltype", "", "int");
  t.setC2ShowFunction(function (n) {
    n.show();
  });
  t.addEventHandler("Click", this.e111n2_client);
  this.setUserControl(t);
  n[2] = { id: 2, fld: "", grid: 0 };
  n[3] = { id: 3, fld: "MAINTABLE", grid: 0 };
  n[4] = { id: 4, fld: "", grid: 0 };
  n[5] = { id: 5, fld: "", grid: 0 };
  n[6] = { id: 6, fld: "TOP", format: 1, grid: 0, ctrltype: "textblock" };
  n[7] = { id: 7, fld: "", grid: 0 };
  n[8] = { id: 8, fld: "", grid: 0 };
  n[9] = { id: 9, fld: "GRID", format: 1, grid: 0, ctrltype: "textblock" };
  n[10] = { id: 10, fld: "", grid: 0 };
  n[11] = { id: 11, fld: "", grid: 0 };
  this.Events = {
    e111n2_client: ["BOOTSTRAPCLICK1.CLICK", !0],
    e141n2_client: ["ENTER", !0],
    e151n2_client: ["CANCEL", !0],
  };
  this.EvtParms.REFRESH = [[], []];
  this.EvtParms["BOOTSTRAPCLICK1.CLICK"] = [
    [
      {
        av: "this.BOOTSTRAPCLICK1Container.ButtonId",
        ctrl: "BOOTSTRAPCLICK1",
        prop: "ButtonId",
      },
    ],
    [
      {
        av: 'gx.fn.getCtrlProperty("GRID","Caption")',
        ctrl: "GRID",
        prop: "Caption",
      },
    ],
  ];
  this.EvtParms.ENTER = [[], []];
  this.Initialize();
});
gx.wi(function () {
  gx.createParentObj(this.applogin);
});
