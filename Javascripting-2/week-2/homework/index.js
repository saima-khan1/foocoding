const synonyms=[  
['rate','ratings'],
['approval', 'popularity'],   ];
const queries =[
    ['obama approval rate','obama popularity'],
    ['obama approval rates' ,'obama popularity ratings'],
    ['obama approval rate', 'popularity ratings obama'],
];
const isSynonyms=(synonymsList,queriesList)=>{
    if( synonymsList.lenght === queriesList.lenght)
    return true;
    if( synonymsList.lenght !== queriesList.lenght)
    return false;
}

console.log(isSynonyms(synonyms,queries));