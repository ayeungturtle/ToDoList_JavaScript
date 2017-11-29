var toDo = {
    list: [],
  
    print: function() {
      var docList = document.querySelector('ul');
      docList.innerHTML='';
      if (this.list.length === 0) {
        console.log("There are no ToDo's on your list.");
      } else {
        console.log("Your ToDo's:");
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].completed === false) {
            view.print(false, this.list[i].toDoText);
          } else {
            view.print(true, this.list[i].toDoText);
          }
        }
      }
    },
  
    add: function(input) {
      this.list.push({
        toDoText: input,
        completed: false
      });
      this.print();
    },
  
    edit: function(index, toDoText) {
      this.list[index].toDoText = toDoText;
      this.print();
    },
  
    destroy: function(index) {
      this.list.splice(index, 1);
      this.print();
    },
  
    toggle: function(index) {
      var todo = this.list[index];
      todo.completed = !todo.completed;
      this.print();
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
      this.print();
    }
  };
  
  var handlers = {
    print: function() {
      toDo.print();
    },
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
    print: function (completed, text) {
      var docList = document.querySelector('ul');
      var todoLi = document.createElement('li');
      if(completed) {
        var x = document.createTextNode("(X)");
      } else {
        var x = document.createTextNode("( )");
      }
      var text = document.createTextNode(text);
      todoLi.appendChild(x);
      todoLi.appendChild(text);
      docList.appendChild(todoLi);
    }
  };
  
  
  
  