//References to dependencies
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    runSequence = require('run-sequence'),
    del = require('del');
var pack = require('./package.json');
var path = pack['path'];

//Task Code
var js_path = {
    js: [
        'node_modules/angular/angular.min.js',
        path.dist + '/angular-rem.min.js'
    ]
};
var taskObj = {
    uglify: function () {
        return gulp.src(path.src + '/*.js')
            .pipe(gulp.dest(path.dist))
            .pipe(plugins.uglify())
            .pipe(plugins.rename('angular-rem.min.js'))
            .pipe(gulp.dest(path.dist));
    },
    clear: function (done) {
        return del([
            path.dist,
            'example/lib'
        ], done);
    },
    copyJs: function () {
        return gulp.src(js_path.js)
            .pipe(gulp.dest('example/lib'));
    },
    watch: function () {
        gulp.watch('example/**/*.*', function () {
            runSequence('reload');
        });
    },
    reload: function () {
        gulp.src('example/*.html')
            .pipe(plugins.connect.reload());
    },
    connect: function () {
        plugins.connect.server({
            root: 'example',
            port: 8080,
            livereload: true
        });
    },
    build: function (done) {
        runSequence(['clear'], 'uglify', 'copy:js', done);
    },
    serve: function (done) {
        runSequence('build', 'connect', 'watch', done);
    }
};

gulp.task('copy:js', taskObj.copyJs);

gulp.task('reload', taskObj.reload);
gulp.task('connect', taskObj.connect);
gulp.task('build', taskObj.build);

gulp.task('watch', taskObj.watch);
gulp.task('serve', taskObj.serve);

gulp.task('uglify', taskObj.uglify);
gulp.task('clear', taskObj.clear);

//Run the test cases
gulp.task('default', ['serve']);

//Release new versions of the software
gulp.task('release',
    ['clear',
        'uglify']
);
