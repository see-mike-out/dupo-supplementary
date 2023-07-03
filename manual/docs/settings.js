const DocSettings = {
  title: "Settings",
  content: [
    {
      type: 'text-html',
      content: "Dupo provides chart the following setting options: <em>Device preview</em> (,), <em>Preferences</em> (.), <em>Recommender history</em> (H), and <em>Files</em> (S)."
    },
    {
      type: 'image',
      src: "images/settings.png",
      alt: "Dupo's setting menus and shortcuts",
      width: 400
    }
  ]
}

const DocPreview = {
  title: "Device preview",
  content: [
    {
      type: 'text-html',
      content: "Using the device preview option, a user can check the actual size of responsive versions that are rescaled using each device's PPI values."
    },
    {
      type: 'image',
      src: "images/device-preview.png",
      alt: "Dupo's device preview including desktop, phone, and watch face versions",
      width: 900
    }
  ]
}

const DocPreferences = {
  title: "Preferences",
  content: [
    {
      type: 'text-html',
      content: "In the preferences menu, a user can toggle to show device size indicators ('Show device dimensions') and to unlock a new artboard. The user can add or change a set of default artboards. The user can update recommender parameters (the number of recommendations for Exploration and Altreation, the ratio of drastic change views) and weight terms for loss measures (identification, comparison, trend, text, and density)."
    },
    {
      type: 'image',
      src: "images/preferences.png",
      alt: "Dupo's preferences setting for device size indicator, unlocking new artboards, default artboard settings, and exploration/recommender parameters.",
      width: 900
    }
  ]
}

const DocHistory = {
  title: "Exploration History",
  content: [
    {
      type: 'text-html',
      content: "In the exploration history, a user can review their interaction with Dupo's recommender for each version and revert previous 'hide-this' actions."
    },
    {
      type: 'image',
      src: "images/exploration-history.png",
      alt: "Dupo's exploration history and reverting 'hide-this' actions",
      width: 700
    }
  ]
}

const DocExport = {
  title: "Files",
  content: [
    {
      type: 'text-html',
      content: "In the files menu, a user can import a Dupo file (JSON format) or export existing artboards into a Dupo file or an HTML file with media queries."
    },
    {
      type: 'image',
      src: "images/files.png",
      alt: "Dupo's import and export interfaces",
      width: 700
    }
  ]
}