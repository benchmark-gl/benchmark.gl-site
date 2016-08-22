import fs from 'fs'
import gulp from 'gulp'
import rev from 'gulp-rev'
import revReplace from 'gulp-rev-replace'
import critical from 'critical'
import purifycss from 'gulp-purifycss'
import htmlmin from 'gulp-htmlmin'
import cleancss from 'gulp-clean-css'
import uglify from 'gulp-uglify'
import header from 'gulp-header'


gulp.task('rev', () =>
  gulp.src(['docs/**/*', '!**/*.html', '!**/*.txt', '!**/*.ico'])
    .pipe(rev())
    .pipe(gulp.dest('docs/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('docs/')))

gulp.task('rev:replace', ['rev'], () => {
  const manifest = gulp.src('docs/rev-manifest.json')
  return gulp.src('docs/**/*')
    .pipe(revReplace({
      manifest,
    }))
    .pipe(gulp.dest('docs/'))
})

gulp.task('purifycss', () =>
  gulp.src('docs/**/*-*.css')
    .pipe(purifycss(['docs/**/*.js', 'docs/**/*.html'], { minify: true }))
    .pipe(gulp.dest('docs/')))

gulp.task('critical', () =>
  gulp.src('docs/**/*.html')
    .pipe(critical.stream({
      base: 'docs/',
      inline: true,
      dimensions: [{
        width: 1336,  // desktop
        height: 768,
      }, {
        width: 1024,  // tablet
        height: 768,
      }, {
        width: 360,  // mobile
        height: 640,
      }],
    }))
    .pipe(gulp.dest('docs/')))

gulp.task('minify:html', () =>
  gulp.src(['docs/**/*.html'])
    .pipe(htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: {
        preserveComments: 'license',
        compressor: {
          screw_ie8: true,
        },
      },
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    }))
    .pipe(gulp.dest('docs/')))

gulp.task('minify:css', () =>
  gulp.src('docs/**/*-*.css')
    .pipe(cleancss())
    .pipe(gulp.dest('docs/')))

gulp.task('minify:js', () =>
  gulp.src('docs/**/*-*.js')
    .pipe(uglify({
      preserveComments: 'license',
      compressor: {
        screw_ie8: true,
      }
    }))
    .pipe(gulp.dest('docs/')))
