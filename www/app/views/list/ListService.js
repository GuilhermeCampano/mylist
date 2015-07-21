services.factory('Lists', function($localstorage) {
  var lists = [];
  var storageLists = $localstorage.getObject('lists'); 
  if ( storageLists.length > 0 ) lists = storageLists;
  
  /*
  var lists = [
  {
    id: 0,
    name: 'Mercado',
    description: 'LAAAAGANHA',
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    dateOfCreation: 1437438550061,
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
    dateOfCreation: 1437438550061,
    items: [
        {id: 0, name: "Capinha do E5", qtd:1, unity:""},
        {id: 1, name: "Xerox", qtd:5, unity:"cópias"},  
    ]
  }
               
  ];
  */
  return {
    all: function() {
      return lists;
    },
    
    updateStorage : function(lists){
        $localstorage.setObject('lists',lists);
    },
    
    add: function(list) {
      if(lists.push(list)){
        this.updateStorage(lists);
        return true;
      }
      else return false;
    }, 
      
    addItem: function(listId,item) {
      if(lists[listId].items.push(item)){
        this.updateStorage(lists);
        return true;
      }
      else return false;
    },
      
    remove: function(list) {
      lists.splice(lists.indexOf(list), 1);
      this.updateStorage(lists);
    },
      
    removeItem: function(listId, item) {
      var items = lists[listId].items;
      lists[listId].items.splice(items.indexOf(item), 1);
      this.updateStorage(lists);
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
