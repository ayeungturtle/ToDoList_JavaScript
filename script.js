// Code goes here

var toDo = {
  list: [],

  add: function(input) {
    this.list.push({
      toDoText: input,
      completed: false
    });
    view.print();
  },

  edit: function(index, toDoText) {
    this.list[index].toDoText = toDoText;
    view.print();
  },

  destroy: function(index) {
    this.list.splice(index, 1);
    view.print();
  },

  toggle: function(index) {
    var todo = this.list[index];
    todo.completed = !todo.completed;
    view.print();
  },
  
  toggleAll: function(){
    var trueCount = 0;
    for (i = 0; i < this.list.length; i++){
      if (this.list[i].completed === true){
        trueCount ++;
      }
    }
    if (trueCount === this.list.length){
      for (var i = 0; i < this.list.length; i++) {
          this.list[i].completed = false;
        }
    } 
    else {
        for (var i = 0; i < this.list.length; i++) {
          this.list[i].completed = true;
        }
    }
    view.print();
  }
};

var handlers = {
  toggleAll: function() {
    toDo.toggleAll();
  },
  add: function() {
    var item = document.getElementById('add');
    toDo.add(item.value);
    item.value = '';
  },
  edit: function() {
    var index = document.getElementById('editIndexInput');
    var text = document.getElementById('editTextInput');
    toDo.edit(index.valueAsNumber, text.value);
    index.value = '';
    text.value = '';
  },
  destroy: function() {
    var destroyIndex = document.getElementById('destroyIndexInput');
    toDo.destroy(destroyIndex.valueAsNumber);
    destroyIndex.value = '';
  },
  toggle: function() {
    var toggleIndex = document.getElementById('toggleIndexInput');
    toDo.toggle(toggleIndex.valueAsNumber);
    toggleIndex.value = '';
  }
};

var view = {
  print: function() {
    var pageList = document.querySelector('ul');
    pageList.innerHTML='';
    for (var i=0; i<toDo.list.length; i++) {
      var newLi = document.createElement('li');
      var todo = toDo.list[i];
      if (todo.completed) {
        var x = '(X) ';
      } else {
        var x = '( ) ';
      }
      newLi.textContent = x + todo.toDoText;
      pageList.appendChild(newLi);
    }
  }
};



