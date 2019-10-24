import React from 'react';
import './App.css';
import CommentBubble from './components/CommentBubble'
function App() {
  return (
    <div className="App">
      <CommentBubble text="this is a short one" />
      <CommentBubble text="this is a long one. for certain. blah blah blac. afdssda j;lfas afs
      afsd lkjhdaks jhasd kljhlfdaskjhasdl asdkfjh asflkhjfa sdlhjkdasf kdals fhkadjsfl jdas fljfadlsjhfskfjds 
      afds kljhadfs lkjh adfklsj hafkdsj hdfksajhkljdhas kjhfa lkjhfa 
      ad skjhladfskhsfda jhkas jhkjfdsha kjash kjsadh kjasfh kjdfas hjkdsa kl" />
    </div>
  );
}

export default App;
