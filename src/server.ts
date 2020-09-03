import app from '@src/bin/app';

function init() {
  app.listen(app.get('port'));
  console.log(`🚀 Server started on http://localhost:${app.get('port')}`);
}

init();