import { Todoinput } from "./task/todoinput";



export const  Month = ()=>{
    function selectMonth(date) {
        return Array(31).fill(new Date(date)).map((el, idx) =>
          new Date(el.setDate(1 + idx))).filter(el => el.getMonth() === date.getMonth());
      }
      
      const date = new Date();
      selectMonth(date).map(el => console.log(el))

      return (
        <div>

         {
            selectMonth(date).map((day)=>( <>
                           <h1>{day.toLocaleDateString()}</h1>
                            <Todoinput />
            </>))
         }

        </div>
      )
}