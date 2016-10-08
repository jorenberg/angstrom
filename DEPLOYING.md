## Ångström®: How to deploy?

## Preparing the release

1. Be certain that `version` has been updated in `package.json`.
2. Create a new `CHANGELOG.md` entry with information about this release ([example](https://github.com/iamprabhat/angstrom/blob/master/CHANGELOG.md)).
3. Update `README.md`, and `INSTALLATION.md` files to reflect what the new CDN URLs and library versions _will_ be once this release is live.
4. Commit updates from these steps now.
5. Be certain to run `$ grunt build` so that the files you commit and deploy from `./dist` are in fact the latest and greatest.

## Cutting the release

* Force-add the `dist` folder: `git add .dist/  -f`
* Commit this: `git commit -m "v{version} release"`
* Create a new tag: `git tag v{version}` (ex: v0.0.1)
* Push this tag: `git push origin v{version}` (ex: v0.0.1)

_Need a do-over? Tags can be overwritten with the `-f` flag._

## Verify the release

* [Check the repo releases](https://github.com/iamprabhat/angstrom/releases) and download the ZIP file to ensure that the `dist` folder and built files are there.<br/>If so, continue...

## Deploying to NPM

**Beware: this is a one-time deal. Releases cannot be re-published!**

* Deploy this tag the npm: `$ npm publish`

This [blog post](docs/extend/publishing-packages-to-npm-and-bower.md) was especially helpful with information on
publishing to `npm` and `bower`.

## One Last Step!

Now that you've finished, un-commit the `dist/` folder.

```ssh
git reset --soft HEAD~1
git rm --cached ./dist
```

<b>Happy Coding<i>!</i></b><br/><br/>Thanks.
