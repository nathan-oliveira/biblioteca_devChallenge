import ResponseClass from '@src/models/ResponseClass';

class Functions {
  static Response(err: object, result: any, method: string) {
    const resp = new ResponseClass();
    let status: number;

    let respMsg = method == 'POST' ? ['realizado', 'efetuar'] : 
      method == 'PUT' ? ['atualizado', 'atualizar'] :
      method == 'DELETE' ? ['excluido', 'excluir'] : 'GET';
    
    if(err) {
      status = 401;
      resp.error = true;
      resp.msg = 'Ocorreu um erro!';
    } else {
      if(respMsg != 'GET') {
        if(result.rowCount > 0) {
          resp.msg = `Cadastro ${respMsg[0]} com sucesso!`;
          status = 201;
        } else {
          status = 401;
          resp.error = true;
          resp.msg = `Não foi possivel ${respMsg[1]} o cadastro!`;
        }
      } else {
        resp.dados = result.rows;
        status = 201;
      }
    }
   
    return {
      status,
      resp
    }
  }
}

export default Functions;