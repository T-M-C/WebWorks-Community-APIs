# SetLockScreenWallpaper BB10 Cordova Plugin

This Plugin allows you to Set the **LockScreenWallpaper** for BlackBerry 10 Devices (10.3+).

### Applies To

* [Apache Cordova for BlackBerry 10](https://github.com/blackberry/cordova-blackberry/tree/master/blackberry10)

### Author

* [TMC Devs](https://twitter.com/julster85)

### Release History

* **V1.0.0** - Initial release

### Known Issues

* None

### Including the feature in your application

This API can be installed from source or from NPM. Installation from NPM is done through the following:

	cordova plugin add cordova-plugin-setlockscreenwallpaper

Installation from source is the same but instead of the id ("cordova-plugin-setlockscreenwallpaper"), use the file system path to the source plugin folder.

#### BlackBerry 10

1. BlackBerry Device software 10.3+

# API Reference #

```javascript

var imagepath = "/accounts/1000/appdata/xxxxxxxxxxxxxxx/data/someImageFile.jpg"; //Start NOT with 'file://....''

var result = cordova.plugins.setlockscreenwallpaper.setlockscreenwallpaper(imagepath);

console.log(result); // "success" or "error"

```

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.