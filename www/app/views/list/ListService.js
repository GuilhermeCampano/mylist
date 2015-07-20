services.factory('Lists', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var lists = [
  {
    id: 0,
    name: 'Mercado',
    description: 'LAAAAGANHA',
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    dateOfCreation: '18/05/2015',
    items: [
        {id: 0, name: "Massa", qtd:1, unity:""},
        {id: 1, name: "Molho de tomate", qtd:2, unity:"Latas"},
        {id: 2, name: "Queijo", qtd:300, unity:"gramas"},
        {id: 3, name: "Presunto", qtd:500, unity:"gramas"},
    ]
  },
               
  {
    id: 1,
    name: 'Shopping',
    description: 'Tranqueiras',
    image: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    dateOfCreation: '20/05/2015',
    items: [
        {id: 0, name: "Capinha do E5", qtd:1, unity:""},
        {id: 1, name: "Xerox", qtd:5, unity:"cópias"},  
    ]
  }
               
  ];

  return {
    all: function() {
      return lists;
    },
    
    add: function(list) {
      if(lists.push(list)) return true;
      else return false;
    },
      
    remove: function(list) {
      lists.splice(lists.indexOf(list), 1);
    },
      
    removeItem: function(listId, item) {
      var items = lists[listId].items;
      lists[listId].items.splice(items.indexOf(item), 1);
    },
      
    get: function(listId) {
      for (var i = 0; i < lists.length; i++) {
        if (lists[i].id === parseInt(listId)) {
          return lists[i];
        }
      }
      return null;
    }
  };
});
