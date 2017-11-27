var list = [
	{
		title:'吃饭打豆豆'
	},
	{
		title:'吃蛋打豆豆'
	}

];

new Vue({
	el:'.main',
	data:{
		list:list,
		todo:''
	},
	methods:{
		addTodo(data,ev) {
			console.log(ev);
				this.list.push({
					title:this.todo
				});
				this.todo = '';
		}
	}
});
