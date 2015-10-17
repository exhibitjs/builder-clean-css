import CleanCSS from 'clean-css';
import path from 'path';

const defaults = {
  include: '**/*.css',
};

export default function (options) {
  options = Object.assign({}, defaults, options);

  // remove plugin-only options
  const include = options.include;
  delete options.include;

  return function exhibitCleanCss({matches, file, contents, util, emit}) {
    // skip irrelevant files
    if (!matches(include)) return contents;

    let styles, sourceMap, errors, warnings;

    try {
      ({styles, sourceMap, errors, warnings} = new CleanCSS(options).minify(contents.toString()));
    }
    catch (error) {
      throw new util.SourceError({
        message: error.message,
        file,
        contents,
      });
    }

    if (errors && errors.length) {
      console.error('ERRORS FROM CLEANCSS', errors);
      // errors.forEach(error => emit('error', new util.SourceError({
      //   message: error.message,
      //   originalError: error,
      // })));
    }
    if (warnings && warnings.length) {
      console.error('WARNINGS FROM CLEANCSS', errors);
      // warnings.forEach(warning => emit('warning', new util.SourceError({
      //   message: error.message,
      //   originalError: error,
      // })));
    }

    if (sourceMap) {
      delete sourceMap.sources;

      return {
        [file]: styles + `\n//# sourceMappingURL=${path.basename(file)}.map`,
        [`${file}.map`]: util.convertSourceMap.fromObject(sourceMap).toJSON(),
      };
    }

    return styles || null;
  };
}
