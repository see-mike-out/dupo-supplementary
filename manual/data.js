const nav = [
  {
    level: 0,
    title: "Interface overview",
    state: "interface-overview",
    active: true
  },
  {
    level: 0,
    title: "Artboard",
    state: "artboard",
    active: false
  },
  {
    level: 1,
    title: "Edit History",
    state: "artboard-history",
    parent: "artboard",
    active: false
  },
  {
    level: 1,
    title: "Versions",
    state: "artboard-versions",
    parent: "artboard",
    active: false
  },
  {
    level: 0,
    title: "Edit menus",
    state: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Artboard",
    state: "menu-artboard",
    parent: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Data",
    state: "menu-data",
    parent: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Data Transform",
    state: "menu-data-transform",
    parent: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Layout",
    state: "menu-layout",
    parent: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Projection",
    state: "menu-projection",
    parent: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Select",
    state: "menu-select",
    parent: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Mark",
    state: "menu-mark",
    parent: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Axis",
    state: "menu-axis",
    parent: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Legend",
    state: "menu-legend",
    parent: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Title",
    state: "menu-title",
    parent: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Annotation",
    state: "menu-annotation",
    parent: "edit-menus",
    active: false
  },
  {
    level: 1,
    title: "Interaction",
    state: "menu-interaction",
    parent: "edit-menus",
    active: false
  },
  {
    level: 0,
    title: "Recommender",
    state: "recommender",
    active: false
  },
  {
    level: 1,
    title: "Control Panel",
    state: "recommender-control-panel",
    parent: "recommender",
    active: false
  },
  {
    level: 1,
    title: "Action Widget",
    state: "recommender-action-widget",
    parent: "recommender",
    active: false
  },
  {
    level: 1,
    title: "Quick Edits",
    state: "recommender-quick-edits",
    parent: "recommender",
    active: false
  },
  {
    level: 0,
    title: "Settings",
    state: "settings",
    active: false
  },
  {
    level: 1,
    title: "Device Preview",
    state: "setting-preview",
    parent: "settings",
    active: false
  },
  {
    level: 1,
    title: "Preferences",
    state: "setting-preferences",
    parent: "settings",
    active: false
  },
  {
    level: 1,
    title: "Exploration History",
    state: "setting-history",
    parent: "settings",
    active: false
  },
  {
    level: 1,
    title: "Files",
    state: "setting-files",
    parent: "settings",
    active: false
  },
];

const docs = {
  'interface-overview': DocInterfaceOverview,
  'edit-menus': DocEditMenus,
  'menu-artboard': DocMenuArtboard,
  'menu-data': DocMenuData,
  'menu-data-transform': DocMenuDataTransform,
  'menu-layout': DocMenuLayout,
  'menu-projection': DocMenuProjection,
  'menu-select': DocMenuSelect,
  'menu-mark': DocMenuMark,
  'menu-axis': DocMenuAxis,
  'menu-legend': DocMenuLegend,
  'menu-title': DocMenuTitle,
  'menu-annotation': DocMenuAnnotation,
  'menu-interaction': DocMenuInteraction,
  'settings': DocSettings,
  'setting-preview': DocPreview,
  'setting-history': DocHistory,
  'setting-preferences': DocPreferences,
  'setting-files': DocExport,
  'recommender': DocRecommender,
  'recommender-control-panel': DocControlPanel,
  'recommender-action-widget': DocActionWidget,
  'recommender-quick-edits': DocQuickEdits,
  'artboard': DocArtboard,
  'artboard-history': DocEditHistory,
  'artboard-versions': DocVersions,
}