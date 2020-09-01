import conn from '@src/bin/key';

class BooksDAO {
  static getAll(callback: any): void {
    const sql = 'select * from bibliotecaDevChallenge.biblioteca';
    conn.query(sql, callback);
  }

  static toSave(dados: any, callback: any) {
    const sql = 'INSERT INTO bibliotecaDevChallenge.biblioteca (titulo, editora, foto, autores) VALUES($1, $2, $3, $4)';
    conn.query(sql, [dados.titulo, dados.editora, dados.foto, `{${dados.autores}}`], callback);
  }

  static update(id: string, dados: any, callback: any) {
    const sql = 'UPDATE bibliotecaDevChallenge.biblioteca SET titulo = $1, editora = $2, foto = $3, autores = $4 WHERE id = $5';
    conn.query(sql, [dados.titulo, dados.editora, dados.foto, `{${dados.autores}}`, id], callback);
  }

  static delete(id: string, callback: any) {
    const sql = 'DELETE FROM bibliotecaDevChallenge.biblioteca WHERE id = $1';
    return conn.query(sql, [id], callback)
  }
}

export default BooksDAO;