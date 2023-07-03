const DocEditMenus = {
  title: "Edit Menus",
  content: [
    {
      type: 'text-html',
      content: "Dupo provides chart edit menus and setting options."
    },
    {
      type: 'image',
      src: "images/toolbar.png",
      alt: "Dupo's toolbar and shortcuts",
      width: 400
    },
    {
      type: 'text-html',
      content: "Chart edit menus are: <em>Artobard</em> (A), <em>Data</em> (D), <em>Data transform</em> (F), <em>Layout</em> (L), <em>Projection/map</em> (P), <em>Select</em> (V), <em>Mark/encoding</em> (M), <em>Axis</em> (X), <em>Legend</em> (G), <em>Title</em> (T), <em>Annotation/label</em> (N), and <em>Interaction</em> (I)."
    },
    {
      type: 'text-html',
      content: "The blue magic wand button is for using the recommender."
    },
    {
      type: 'text-html',
      content: "Setting options are: <em>Device preview</em> (,), <em>Preferences</em> (.), <em>Recommender history</em> (H), and <em>Files</em> (S)."
    }
  ]
}

const DocMenuArtboard = {
  title: "Artboard Menu",
  content: [
    {
      type: 'text-html',
      content: "In the artboard menu, a user can create an artboard or edit the size (width and height) and device details of an artboard. Device details include: width, height, and pixel per inch (PPI)."
    },
    {
      type: 'image',
      src: "images/artboard-menu.png",
      alt: "Dupo's artboard menu sections: the list of artboards, creating a new artboard, and modifying an existing artboard.",
      width: 650
    },
  ]
}

const DocMenuData = {
  title: "Data Menu",
  content: [
    {
      type: 'text-html',
      content: "In the data menu, a user can upload a data file in common formats (csv, json, tsv) and preview the data set."
    },
    {
      type: 'image',
      src: "images/data-menu.png",
      alt: "Dupo's data menu with data set preview.",
      width: 650
    },
  ]
}

const DocMenuDataTransform = {
  title: "Data Transform Menu",
  content: [
    {
      type: 'text-html',
      content: "In the data transform menu, a user can add a new filter operation and make a new calculated field. By checking the element-lock ('Lock data transformations'), the user can prevent Dupo from suggesting designs with changes to data transforms."
    },
    {
      type: 'image',
      src: "images/data-transform-menu.png",
      alt: "Dupo's data transform menu, and widgets for making a filter and new calculated field.",
      width: 900
    },
  ]
}

const DocMenuLayout = {
  title: "Layout Menu",
  content: [
    {
      type: 'text-html',
      content: "In the layout menu, a user can set three high-level layout types: single (layered or tabular), multiples, and projection (map). The user can drag data field to column, row, and multiple (repeat). By checking 'lock axis-transpose' (a position lock), the user can prevent Dupo from suggesting design with axes transposed. For multiples, the user can edit the header labels."
    },
    {
      type: 'image',
      src: "images/layout-menu.png",
      alt: "Dupo's layout menu for single, projection, and mutiples. Multiples layout offers the editing panel for the header labels.",
      width: 800
    },
  ]
}

const DocMenuProjection = {
  title: "Layout Menu",
  content: [
    {
      type: 'text-html',
      content: "In the projection menu, a user can the details of how to show the map in terms of the projection method, feature level (state/county), cneter position, translation (horizontal movement), scale. The user can also use a custom map file."
    },
    {
      type: 'image',
      src: "images/projection-menu.png",
      alt: "Dupo's Projection menu.",
      width: 225
    },
  ]
}

const DocMenuSelect = {
  title: "Select Menu",
  content: [
    {
      type: 'text-html',
      content: "Using the select menu, a user can overview the (tree) structure of their visualization design, or select a specific element by clicking one from the tree or double-clicking it in the artboard. Once the user makes a selection, the select menu shows a set of context menus for the selected element. In the tree view, the user can set element-lock and position-lock as well."
    },
    {
      type: 'image',
      src: "images/select-menu.png",
      alt: "Dupo's select menu for a design structure tree and direct selection",
      width: 500
    },
  ]
}

const DocMenuMark = {
  title: "Mark Menu",
  content: [
    {
      type: 'text-html',
      content: "In the mark menu, a user can add or edit a mark layer. Dupo supports multi-layered visualizations except for small multiples. The user can change the order of layers. For each mark type, Dupo lets the user modify encoding channels as well. If the user chooses 'static' then a constant value is used. If the user chooses 'encoding' then they can assign a data field for that channel. The user can edit a specific mark using the select menu (make a selection ▶︎ choose 'Edit the selected mark')"
    },
    {
      type: 'image',
      src: "images/mark-menu.png",
      alt: "Dupo's mark menu",
      width: 800
    },
    {
      type: 'text-html',
      content: "When setting an encoding channel, a user can customize the type of encoding, sorting, binning, aggregation, and scales."
    }
  ]
}

const DocMenuAxis = {
  title: "Axis Menu",
  content: [
    {
      type: 'text-html',
      content: "In the axis menu, a user can add or edit an axis. The user can edit the domain, grid, label (layout and text), tick, and title. Dupo supports rich functionalities for label text, including multi-line labels, expressions (some calculation), filtering, formatting, custom mappings, etc. as well as various apperance settings like font color, alignment, etc. Using the responsive locks, the user can specify whether to allow Dupo to suggest designs with changes to axis labels or designs."
    },
    {
      type: 'image',
      src: "images/axis-menu.png",
      alt: "Dupo's axis menu for editing the domain, grid, label (layout and text), tick, and title of an axis",
      width: 800
    }
  ]
}

const DocMenuLegend = {
  title: "Legend Menu",
  content: [
    {
      type: 'text-html',
      content: "In the legend menu, a user can add or edit a legend. The user can edit the layout, labels, and title of a legend. Dupo supports rich functionalities for label text, including multi-line labels, expressions (some calculation), filtering, formatting, custom mappings, etc. as well as various apperance settings like font color, alignment, etc. Using the responsive locks, the user can specify whether to allow Dupo to suggest designs with label/design changes and/or repositioning."
    },
    {
      type: 'image',
      src: "images/legend-menu.png",
      alt: "Dupo's legend menu for editing the layout, label, and title of an axis",
      width: 800
    }
  ]
}

const DocMenuTitle = {
  title: "Title Menu",
  content: [
    {
      type: 'text-html',
      content: "In the title menu, a user can add or edit a title of a visualization. The user can modify the box size (for text wrapping), offsets, and font settings."
    },
    {
      type: 'image',
      src: "images/title-menu.png",
      alt: "Dupo's title menu",
      width: 300
    }
  ]
}

const DocMenuAnnotation = {
  title: "Annotation Menu",
  content: [
    {
      type: 'text-html',
      content: "In the annotation menu, a user can add or edit a mark label or annotation. For mark labels, the user can edit the relative positioning and label text. Dupo supports rich functionalities for label text, including multi-line labels, expressions (some calculation), filtering, formatting, custom mappings, etc. as well as various apperance settings like font color, alignment, etc. For an annoation, the user can opt to link it to a data mark or not. Dupo supports generic styling options for annoatations."
    },
    {
      type: 'image',
      src: "images/annotation-menu.png",
      alt: "Dupo's annotation menu for editing mark labels and annotations",
      width: 800
    }
  ]
}

const DocMenuInteraction = {
  title: "Interaction Menu",
  content: [
    {
      type: 'text-html',
      content: "In the interaction menu, a user can add a tooltip, zoom+pan, and context (brushing) interaction. For legend-highlighting, go to the legend menu."
    },
    {
      type: 'image',
      src: "images/interaction-menu.png",
      alt: "Dupo's interaction menu for adding a tooltip, zoom+pan, and context interaction.",
      width: 350
    }
  ]
}