import conn from '@src/bin/key';

class BooksDAO {
  static getAll(callback: any): void {
    const sql = 'select * from bibliotecaDevChallenge.biblioteca';
    conn.query(sql, callback);
  }
}

export default BooksDAO;