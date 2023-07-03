const DocArtboard = {
  title: "Artboard",
  content: [
    {
      type: 'text-html',
      content: "An artboard in Dupo consists of a header, view area, and status bar. The header shows the title and header menus. The view area shows the visualization, and a user can use device indicators in the left and top offsets to check whether their chart does not exceed the screen space. The status bar shows the artboard's status and provides access to the edit history and versions of the artboard."
    },
    {
      type: 'image',
      src: "images/artboard.png",
      alt: "Dupo's artboard interface",
      width: 400
    },
    {
      type: 'text-html',
      content: "An artboard maintains two statuses: <em>activeness</em> and <em>lock</em>. An active artboard (only one at a time) functions as a basis for making manual edits and automated design suggestions. An edit made to the active artboard is transferred to the other <em>unlocked</em> artboards. A user cannot make an edit to a locked artboard."
    },
    {
      type: 'text-html',
      content: "The header of an artboard provides shortcut mesnus for artboard settings (opens the artboard menu), lock, solo-lock, and delete. The header also indicates the status of the artboard in terms of activeness and lock."
    },
    {
      type: 'image',
      src: "images/header-menu.png",
      alt: "Dupo's header menus for artboard setting, lock, solo-lock, delete; and header status indications for activeness and lock",
      width: 400
    }
  ]
}

const DocEditHistory = {
  title: "Edit History",
  content: [
    {
      type: 'text-html',
      content: "The edit history of an artboard offers an access to all the edits that a user or Dupo's recommender has made. The user can remove any edit shown in the history. "
    },
    {
      type: 'image',
      src: "images/edit-history.png",
      alt: "Dupo's artboard edit history",
      width: 400
    },
    {
      type: 'text-html',
      content: `The source of each edit is indicated by an icon: <i class="bi bi-pencil-fill" /> for a manual edit by a user, <i class="bi bi-stars" /> for an automated edit from the recommender,  <i class="bi bi-lightning-fill" /> for a Quick Edit, and  <i class="bi bi-cursor-fill" /> for a direct manipulation.`
    }
  ]
}

const DocVersions = {
  title: "Versions",
  content: [
    {
      type: 'text-html',
      content: "Using the versions of an artboard, a user can check out to one of the previous views with an option to preview it before checking it out."
    },
    {
      type: 'image',
      src: "images/versions.png",
      alt: "Dupo's artboard versions",
      width: 400
    },
    {
      type: 'text-html',
      content: `Versions with <i class="bi bi-stars" /> are by Dupo's recommender.`
    }
  ]
}
