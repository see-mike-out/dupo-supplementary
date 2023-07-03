const DocRecommender = {
  title: "Recommender Window",
  content: [
    {
      type: 'text-html',
      content: "Dupo's <em>Recommender Window</em> provides design suggestions, consisting of <em>Control Panel</em> (top) and <em>Suggestion Section</em> (bottom). Each design suggestion is accompanied by an <em>Action Widget</em>."
    },
    {
      type: 'image',
      src: "images/recommender-window.png",
      alt: "Dupo recommender window consisting of control panel, suggestion section, and action widget.",
      width: 900
    },
    {
      type: 'text-html',
      content: `Dupo provides recommendations (1) when a user creates a new responsive artboard or (2) when a user clicks the recommender buttion (<i class="bi bi-magic"></i>) in the toolbar.`
    }
  ]
}

const DocControlPanel = {
  title: "Control Panel",
  content: [
    {
      type: 'text-html',
      content: "In the control panel, a user can apply their previous custom edits to design suggestions, choose the level of description (list of transformations or list of transformations and rationales), and sort suggestions in terms of each ranking measure."
    },
    {
      type: 'image',
      src: "images/control-panel.png",
      alt: "Dupo's control panel for time taken, bringing previous edits, level of description, and quick sort.",
      width: 700
    }
  ]
}

const DocActionWidget = {
  title: "Action Widget",
  content: [
    {
      type: 'text-html',
      content: "A user can see the Action Widget of a design suggestion by hovering on it. In the Action Widget, the user can <em>branch</em> a suggestion (creating a new artboard with that suggestion), <em>apply</em> it (to the active artboard for the current suggestions), <em>see similar</em> suggestions (Alteration), and <em>hide</em> it. Hiding a suggestion will remove that suggestion from the suggestion section and not suggest it for later requests. Below these action buttions, the user can see the list of design transformations applied to a suggestion with rationales (which can be adjusted in the Control Panel)."
    },
    {
      type: 'image',
      src: "images/action-widget.png",
      alt: "Dupo's action widget for different actions and descriptions.",
      width: 500
    }
  ]
}

const DocQuickEdits = {
  title: "Quick Edits",
  content: [
    {
      type: 'text-html',
      content: "For some custom edits, Dupo suggests a Quick Edit on the top-right corner. For each Quick Edit, a user can <em>preview</em> it, <em>apply</em> it <em>only to the active artboard</em> or <em>to all the unlocked artboards</em>. or <em>cancel</em> it."
    },
    {
      type: 'image',
      src: "images/quick-edits.png",
      alt: "Dupo's quick edit modal.",
      width: 350
    }
  ]
}