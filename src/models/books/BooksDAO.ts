import conn from '@src/bin/key';

class BooksDAO {
  static getAll(callback: any): void {
    const sql = 'select * from bibliotecaDevChallenge.biblioteca';
    conn.query(sql, callback);
  }

  static toSave(dados: any, callback: any) {
    const sql = `INSERT INTO bibliotecaDevChallenge.biblioteca (titulo, editora, foto, autores)
    VALUES($1, $2, $3, $4)`

    conn.query(sql, [dados.titulo, dados.editora, dados.foto, `{${dados.autores}}`], callback);
  }
}

export default BooksDAO;