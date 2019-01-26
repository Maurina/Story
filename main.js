function mystory(){
    let NounArray = document.getElementById('nouns').value.toLowerCase().split(/\s+|\n/);
    console.log(NounArray);
    let AdjArray = document.getElementById('adjectives').value.toLowerCase().split(/\s+|\n/);
    let VerbArray = document.getElementById('verbs').value.toLowerCase().split(/\s+|\n/);

    let story = `Once upon a time there were four ${AdjArray[0]} ${NounArray[0]}s named Flopsy, Mopsy, Cotton-tail, and Petter.  They lived with their Mother underneath a ${NounArray[1]} near a ${AdjArray[1]}.  Now my dears, said ${AdjArray[2]} Mrs. Rabbit, you may go over the ${NounArray[2]} or around the ${NounArray[3]}, but do not go into Mr. McGregor's ${NounArray[4]}.  Your father had an accident there and he was put in a ${NounArray[5]} by Mrs. McGregor.  Now ${VerbArray[0]} along, and don't get into mischeif.  I am going ${VerbArray[1]}.`
    document.getElementById('storyHere').innerHTML = story;
}

let storyButton = document.getElementById('tellStory');
storyButton.onclick = mystory;