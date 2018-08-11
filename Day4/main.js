const titleText = document.querySelector('#note-title');
const bodyText = document.querySelector('#note-body');
const removeNotes = document.querySelector('#remove-note');
const saveNote = document.querySelector('#save-home');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
console.log(notes);
let note = notes.find(function(note){
  return note.id === noteId;
});

if(note === undefined){
  location.assign('/index.html')
}

titleText.value = note.title;
bodyText.value = note.body;

// Set title Text
titleText.addEventListener('input', function(e){
  note.title = e.target.value;
  saveNotes(notes);
});

// Set Body Text
bodyText.addEventListener('input', function(e){
  note.body = e.target.value;
  saveNotes(notes);
})
// Remove Notes
removeNotes.addEventListener('click', function(){
  removeNote(noteId);
  saveNotes(notes);
  location.assign('/index.html');
});
// Save notes
saveNote.addEventListener('click', function(){
  saveNotes(notes);
  location.assign('/index.html');
});


window.addEventListener('storage', function(e){
  if(e.key === 'notes'){
    notes = JSON.parse(e.newValue);
    note = notes.find(function(note){
      return note.id === noteId;
    });

    if(note === undefined){
      location.assign('/index.html')
    };

    titleText.value = note.title;
    bodyText.value = note.body;
  }
})
