
import React, { useEffect, useState } from 'react';
import Paganation from './components/pagnation';
import Postlist from './components/postlist';
//import Todoform from './components/todoform';
import stringquery from 'query-string'
import PostfilterForm from './components/postfilterform';
//import Colorbox from './components/colorbox';
//import Todolist from './components/todolist';

function App() {

  /***
   * To do list
   */
  const [todolist,settodolist] = useState([
    {id:1,title:'Thong tin chi tiet'},
    {id:2,title:'ve ly thuyet thuc hien'},
    {id:3,title:'cong viec React'},
  ])
  function handleontodoClick(todo){
    //console.log(todo)
    /**
     * findIndex():ham tim kiem cua mang va tra ve gia thanh phan dau tien cua mang do => no se tra ve "true" neu tim thay va "-1" neu khong tim thay 
     * x=>x.id === todo.id: tra ve gia tri cua x khi so sanh gia tri cua mang "x" voi mang "todo" neu nhu no giong nhau.
     * findIndex(x=>x.id === todo.id):=> x co gia tri: x = true khi x trung mang todo va x = -1 khi x khong tim thay tren mang "todo"
     */
    const indexx = todolist.findIndex(x => x.id === todo.id)
    if(indexx < 0){
      return
    }
    
    // ...todolist: lay ra tat ca cac gia tri tu "todolist"
    //newtodolist= [...todolist]: tao "newtodolist" giong voi mang "todolist" de chinh sua newtodolist theo y muon de tranh mang goc bi thay doi
    const newtodolist = [...todolist]
    //newtodolist.splice(index,1):dung de loai bo 1 phan tru trong mang tu vi tri "index" loai bo 1
    newtodolist.splice(indexx,1)
    //gan gia tri thuoc tinh do lai 
    settodolist(newtodolist)
  }

  /**
   * To do Form
   * 
   */
  function handleonSubmit(formValue){
    // to do: --------them 1 gia tri vua nhap vao list da co-------------

    //lay list da co sang
     const new1todolist = [...todolist]
     //tao ra noi luu tru gia tri vua moi gui tu form sao cho trung voi noi luu tru cua list co sang
     const newlist = {id:todolist.length +1, ...formValue,}
     // them no vao list da co sang
     new1todolist.push(newlist)
     //cap nhap lai cai mang moi vua tao
     settodolist(new1todolist)
  }
   //luu tru du lieu tu server ve
   /**
    * do du lieu tren server truyen ve la mang nen postlist phai la mang => useState([])
    * neu muon truyen postlist la string => useState('')
    */
   const [postlist,setpostlist] = useState ([])
  
    /**
    * 
    * To do Paganation
    */

   const [paganation,setpaganation] = useState({
    _page:1,
    _limit:10,
    _totalRows:1
  })

   const [filter,setfilter] = useState({
    _limit:10,
    _page:1,
  })

  function handlePageChange(newPages){
    //console.log("new pag",newPages)
    setfilter({
      ...filter,_page:newPages
    })
  }

  
 //su dung useEffect de lay du lieu tu server ve ma chi load 1 lan
   /**
    * luu y khi truyen du lieu khong nen su dung "useEffect (async ()=>{ wait function(){....}})" o day do useEffect la single function de dam bao
    * lam viec dung voi cach no van hanh
    */
   useEffect(() => {
    async function getPostlist(){
      try {
         /**
          * To do API with server
          * 
          */
        //tao 1 param co tac dung bien doi tuong thanh stirng vi du: ...._limit=10&_page=2
      const paramstring = stringquery.stringify(filter)
        // chung ta can 1 ham de lien ket voi data
      const requireUrl = `http://js-post-api.herokuapp.com/api/posts?${paramstring}`
      //sau do su dung han de lay du lieu voi data
      const require = await fetch(requireUrl)
      //sau do pare no ve chuoi json
      const requireJson = await require.json()
      //coi thu requireJson no co data chua
      console.log({ requireJson })
      //tach data va paganation ra khi lay ve
      const {data,pagination} = requireJson
      // cap nhap no ve postlist
      setpostlist(data)
      //cap nhat paganation
      setpaganation(pagination)
      } catch (error) {
        console.log('Fail to fetch post list', error.message)
      }
    } 
        getPostlist()
   }, [filter]);
   /**
    * ,[]):no giong nhu functionDidMound
    * neu useEffect(()=>{
    * }):thi no se goi lien tuc sau lan render dau tien
    * 
    * neu useEffect(()=>{
    * },[]) thi no se goi dung 1 lan duy nhat sau lan render dau tien
    * 
    * neu userEffect(()=>{
    * },[index]) thi no se goi lai phu thuoc vao "index" khi render lan dau tien
    * 
    * */

   function handlePostfilterForm(newFilter){
    console.log(newFilter,newFilter.giatri)
    setfilter({
      ...filter, _page:1 ,title_like:newFilter.giatri
    })
  } 
   

   
  return (
    <div>
   <h1>Helllo</h1>
    {/*<Todolist todo = {todolist} ontodoClick={handleontodoClick}/>*/}
    {/*<Todoform  onSubmit={handleonSubmit}/>*/}
    <PostfilterForm onSubmit = {handlePostfilterForm}/>
    <Postlist posts={postlist}/>
    <Paganation pagnation={paganation} onPageChange={handlePageChange}/>
   </div>
  );
}

export default App;
