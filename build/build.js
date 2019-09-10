const exec = require("child_process").exec;
const webpack = require("webpack");
const chalk = require("chalk");
const ora = require("ora");
const prodConfig = require("./webpack.prod.conf");

const spinner = ora("building for production...");
spinner.start();

// TODO: 需要跨平台支持
exec("rm -rf ./lib", function(error) {
  if (error) throw error;

  // 开始打包
  webpack(prodConfig, (error, stats) => {
    spinner.stop();

    if (error) throw error;

    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + "\n\n"
    );

    if (stats.hasErrors()) {
      console.log(chalk.red("  Build failed with errors.\n"));
      process.exit(1);
    }

    console.log(chalk.cyan("  Build complete.\n"));
  });
});
