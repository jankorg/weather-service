
export class ServerClass {
  getHeader(req: any,res: any){
         const list = {
           text:"weather service dashboard."
         };
         res.json(list);
  }

  getMenu(req: any,res: any){
  const list = ["item 1","item 2","item 3","item 4"];
  res.json(list);
  }

  getFooter(req: any,res: any){
    const list = {
      text:"Challenge made by Juan Camilo Rodriguez, juan.rodriguez@hazclic.com."
    };
    res.json(list);
    }
}