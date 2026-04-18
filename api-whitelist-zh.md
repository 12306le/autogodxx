# API 白名单（中文参考）

> 只包含上传文档中显式出现的对象名与方法标题。未在此文件或对应详细文档中出现的方法，不应擅自编造。

## $

- 方法/成员（文档标题）:
  - `call(funcName)`
  - `log(log)`
  - `toast(msg)`
  - `alert(msg)`
  - `alert(title, msg)`
  - `getClip()`
  - `setClip(text)`

- 对应文件：`09-ui-core.md`


## $act

- 方法/成员（文档标题）:
  - `hasPermit()`
  - `getPermit()`
  - `click(x, y)`
  - `click(x, y, dur)`
  - `click(x, y, dur, delay)`
  - `click(index)`
  - `click(index, dur)`
  - `click(index, dur, delay)`
  - `click(node)`
  - `click(node, useAct)`
  - `press(node)`
  - `press(node, useAct)`
  - `press(x, y)`
  - `press(x, y, dur)`
  - `press(x, y, dur, delay)`
  - `slide(startX, startY, endX, endY, duration)`
  - `move(x1, y1, x2, y2)`
  - `move(x1, y1, x2, y2, dur)`
  - `move(x1, y1, x2, y2, dur, delay)`
  - `move(node, dir)`
  - `move(node, x2, y2, dur)`
  - `move(node, x2, y2, dur, delay)`
  - `gesture(gesture)`
  - `gesture(gesture1, gesture2)`
  - `gesture(gesture1, gesture2, gesture3)`
  - `gesture(gesture1, gesture2, gesture3, gesture4)`
  - `createPath(paths)`
  - `createPath(paths, dur)`
  - `createPath(paths, delay, dur)`
  - `path(paths)`
  - `path(paths, dur)`
  - `path(paths, startTime, dur)`
  - `home()`
  - `back()`
  - `menu()`
  - `recent()`
  - `power()`
  - `lock()`
  - `unlock()`
  - `splitScreen()`
  - `settings()`
  - `notifications()`
  - `screenshot()`
  - `input(text)`
  - `input(node, text)`
  - `activity()`
  - `activity(callback)`
  - `selector()`
  - `setDevDensity(density)`
  - `setAdapt(usable)`
  - `isOnlyAcc()`
  - `setOnlyAcc(onlyAcc)`
  - `setJitter(jitter)`
  - `enableRoot(enableRoot)`
  - `isEnableRoot()`
  - `enableSzk(enableSzk)`
  - `isEnableSzk()`

- 对应文件：`02-core-automation.md`


## $adapt

- 方法/成员（文档标题）:
  - `setDevDpi(devDpi)`
  - `adtX(adtGetX)`
  - `adtY(adtGetY)`
  - `adtW(adtGetW)`
  - `adtH(adtGetH)`
  - `adtImgScale(adtImgScale)`
  - `enable(enable)`
  - `getPx(devPx)`

- 对应文件：`02-core-automation.md`


## $alert

- 方法/成员（文档标题）:
  - `create()`
  - `title(title)`
  - `isShowing()`
  - `msg(msg)`
  - `cancelable(cancelable)`
  - `icon(icon)`
  - `view(view)`
  - `maxH(max)`
  - `maxW(max)`
  - `maxWH(max)`
  - `but1(text)`
  - `but1(text, callback)`
  - `but2(text)`
  - `but2(text, callback)`
  - `but3(text)`
  - `but3(text, callback)`
  - `items(items, callback)`
  - `oneItems(items, checkedItem, callback)`
  - `moreItems(items, callback)`
  - `moreItems(items, checkedItems, callback)`
  - `show()`
  - `showBefore(callback)`
  - `showAfter(callback)`
  - `onClose(callback)`
  - `close()`

- 对应文件：`13-floaty-dialogs.md`


## $app

- 方法/成员（文档标题）:
  - `getIcon(name)`
  - `runApp(appName)`
  - `launchApp(appName)`
  - `launch(appName)`
  - `launchPkg(packageName)`
  - `runPkg(packageName)`
  - `run(name)`
  - `ls()`
  - `lsUserApp()`
  - `lsSysApp()`
  - `lsRecent()`
  - `startActivity(name)`
  - `startActivity(name, activityName)`
  - `pkgExists(pkgName)`
  - `getPackageName(appName)`
  - `pkgName(appName)`
  - `appName(packageName)`
  - `installApk(apkPath)`
  - `uninstallApp(name)`
  - `uninstallPkg(name)`
  - `uninstall(name)`
  - `openUrl(url)`
  - `shareImg(imgPath)`
  - `shareText(content)`
  - `sendSms(phone, message)`
  - `call(phoneNumber)`
  - `sendMail(mail, title, content)`
  - `openAppSetting(name)`
  - `appSetting(name)`
  - `viewFile(path)`
  - `editFile(path)`
  - `hasUsagePermit()`
  - `getUsagePermit()`
  - `intent(options)`
  - `sendBroadcast(intent)`
  - `sendBroadcast(intent, permis)`
  - `sendOrderedBroadcast(intent, permis)`
  - `startActivity(intent)`
  - `startActivity(options)`
  - `getForeApps()`
  - `kill(name)`
  - `sendMms(phone, title, message, imgPath)`
  - `openSelf()`

- 对应文件：`03-app-management.md`


## $arc

- 方法/成员（文档标题）:
  - `item(iconName)`
  - `body(name)`
  - `has(name)`
  - `close(name)`
  - `closeAll()`

- 对应文件：`13-floaty-dialogs.md`


## $bus

- 方法/成员（文档标题）:
  - `ls()`
  - `post(name, object)`
  - `event(name, listener)`
  - `close(name)`
  - `clear()`
  - `stopAll()`

- 对应文件：`14-concurrency-events.md`


## $color

- 方法/成员（文档标题）:
  - `const {int} BLACK;`
  - `const {int} DGRAY;`
  - `const {int} GRAY;`
  - `const {int} LGRAY;`
  - `const {int} WHITE;`
  - `const {int} RED;`
  - `const {int} GREEN;`
  - `const {int} BLUE;`
  - `const {int} YELLOW;`
  - `const {int} CYAN;`
  - `const {int} MAGENTA;`
  - `const {int} TRANSPARENT;`
  - `find(img, color, threshold, region)`
  - `find(img, color, threshold)`
  - `find(img, color)`
  - `findAll(img, color, threshold, region)`
  - `findAll(img, color, threshold)`
  - `findAll(img, color)`
  - `similar(c1, c2)`
  - `toString(color)`
  - `str(color)`
  - `parse(r, g, b)`
  - `parse(color)`
  - `setAlpha(color, alpha)`
  - `brighter(color)`
  - `darker(color)`
  - `rgb(red, green, blue)`
  - `argb(alpha, red, green, blue)`
  - `a(color)`
  - `r(color)`
  - `g(color)`
  - `b(color)`
  - `equals(c1, c2)`
  - `isDarkTheme()`
  - `isColor(colorStr)`

- 对应文件：`05-image-vision.md`


## $date

- 方法/成员（文档标题）:
  - `dt()`
  - `dt(time)`
  - `d()`
  - `d(time)`
  - `parse(dateStr, pattern)`
  - `parse(dateStr)`
  - `info()`
  - `info(time)`
  - `format(time, pattern)`
  - `format(date, pattern)`
  - `format(dateStr, pattern)`
  - `date()`
  - `date(time)`
  - `date(dateStr)`
  - `dur(milliseconds)`
  - `curTime()`

- 对应文件：`16-global-media-utils.md`


## $device

- 方法/成员（文档标题）:
  - `const {int} width;`
  - `const {int} height;`
  - `const {String} buildId;`
  - `const {String} buildDisplay;`
  - `const {String} product;`
  - `const {String} board;`
  - `const {String} brand;`
  - `const {String} device;`
  - `const {String} model;`
  - `const {String} bootloader;`
  - `const {String} hardware;`
  - `const {String} fingerprint;`
  - `const {int} sdkInt;`
  - `const {String} incremental;`
  - `const {String} release;`
  - `const {String} code;`
  - `const {String} serial;`
  - `const {String} baseOS;`
  - `const {String} securityPatch;`
  - `getIMEI()`
  - `getAndroidId()`
  - `getBrightness()`
  - `getBrightnessMode()`
  - `getMusicVolume()`
  - `getNotificationVolume()`
  - `getAlarmVolume()`
  - `getMusicMaxVolume()`
  - `getNotificationMaxVolume()`
  - `getAlarmMaxVolume()`
  - `getBattery()`
  - `getTotalMem()`
  - `getAvailMem()`
  - `isCharging()`
  - `isScreenOn()`
  - `isScreenOff()`
  - `wakeUp()`
  - `keepScreenOn()`
  - `keepScreenOn(timeout)`
  - `keepScreenDim()`
  - `keepScreenDim(timeout)`
  - `cancelKeepingAwake()`
  - `vibrate(millis)`
  - `cancelVibration()`
  - `getMacAddress()`
  - `hasNavBar()`
  - `getVirtualBarHeight()`
  - `isLock()`

- 对应文件：`06-system-permission.md`


## $dialog

- 方法/成员（文档标题）:
  - `create()`
  - `title(title)`
  - `isShowing()`
  - `msg(msg)`
  - `cancelable(cancelable)`
  - `icon(icon)`
  - `view(view)`
  - `but1(text)`
  - `but1(text, callback)`
  - `but2(text)`
  - `but2(text, callback)`
  - `but3(text)`
  - `but3(text, callback)`
  - `items(items, callback)`
  - `oneItems(items, checkedItem, callback)`
  - `moreItems(items, callback)`
  - `moreItems(items, checkedItems, callback)`
  - `show()`
  - `showBefore(callback)`
  - `showAfter(callback)`
  - `onClose(callback)`
  - `close()`

- 对应文件：`13-floaty-dialogs.md`


## $draw

- 方法/成员（文档标题）:
  - `系统限制`
  - `getPermit()`
  - `rect(rect)`
  - `rect(node)`
  - `rect(x, y, w, h)`
  - `rect(x, y, w, h, color)`
  - `rect(x, y, w, h, ext)`
  - `rect(x, y, w, h, ext, color)`
  - `rect(arr, ext, color)`
  - `cross(point)`
  - `cross(index)`
  - `cross(node)`
  - `cross(x, y)`
  - `cross(x, y, color)`
  - `dot(index)`
  - `dot(point)`
  - `dot(x, y)`
  - `dot(x, y, color)`
  - `text(text, x, y)`
  - `text(text, x, y, size)`
  - `text(text, x, y, size, color)`
  - `circle(x, y)`
  - `circle(x, y, r)`
  - `circle(x, y, r, ext)`
  - `circle(x, y, r, ext, color)`
  - `img(img, x, y, w, h)`
  - `line(x, y, toX, toY)`
  - `line(x, y, toX, toY, color)`
  - `path(data)`
  - `path(data, color)`
  - `i(text, x, y, size)`
  - `i(text, x, y)`
  - `i(text)`
  - `d(text, x, y, size)`
  - `d(text, x, y)`
  - `d(text)`
  - `w(text, x, y, size)`
  - `w(text, x, y)`
  - `w(text)`
  - `e(text, x, y, size)`
  - `e(text, x, y)`
  - `e(text)`
  - `v(text, x, y, size)`
  - `v(text, x, y)`
  - `v(text)`
  - `log(text, color, x, y, size)`
  - `log(text, color, x, y)`
  - `log(text, color)`
  - `log(text)`
  - `log(text, x, y)`
  - `closeAll()`
  - `closeAll(delay)`
  - `closeLog(delay)`
  - `closeLog()`
  - `clear()`

- 对应文件：`05-image-vision.md`


## $engine

- 方法/成员（文档标题）:
  - `runJs(jsPath)`
  - `stop()`

- 对应文件：`14-concurrency-events.md`


## $event

- 方法/成员（文档标题）:
  - `on(name, callback)`
  - `add(name, callback)`
  - `ls()`
  - `clear()`

- 对应文件：`14-concurrency-events.md`


## $excel

- 方法/成员（文档标题）:
  - `read(path)`
  - `read(path, index)`
  - `num(path)`
  - `ls(path)`
  - `loop(path, onSheet)`
  - `write(sheetName, sheetData, path)`

- 对应文件：`07-file-storage.md`


## $ext

- 方法/成员（文档标题）:
  - `loadApk(apkPath)`
  - `loadDex(dexPath)`
  - `loadDexs(paths)`
  - `loadJar(jarPath)`
  - `loadJars(paths)`
  - `loadDex(options)`
  - `loadJar(options)`
  - `loadApk(options)`
  - `clear()`
  - `delete()`

- 对应文件：`15-extensions.md`


## $fc

- 方法/成员（文档标题）:
  - `show(callback)`
  - `show(callback, options)`

- 对应文件：`07-file-storage.md`


## $file

- 方法/成员（文档标题）:
  - `uri(path)`
  - `open(path)`
  - `isFile(path)`
  - `isDir(path)`
  - `isEmptyDir(path)`
  - `isEmpty(path)`
  - `join(parent, child)`
  - `join(path)`
  - `create(path)`
  - `mkdir(path)`
  - `exists(path)`
  - `ensureDir(path)`
  - `read(path)`
  - `read(path, encoding)`
  - `reads(path)`
  - `readByte(path)`
  - `write(content, path)`
  - `write(content, path, encoding)`
  - `writes(lines, path)`
  - `add(content, path)`
  - `adds(lines, path)`
  - `writeByte(bytes, path)`
  - `copy(src, dest)`
  - `move(src, dest)`
  - `rename(src, dest)`
  - `size(path)`
  - `sizeStr(size)`
  - `sizeStr(path)`
  - `name(path)`
  - `mainName(path)`
  - `ext(path)`
  - `sd()`
  - `del(path)`
  - `ls(path)`
  - `ls(path, filter)`
  - `loopFiles(path, accept)`
  - `lsVideo()`
  - `lsAudio()`
  - `lsImages()`
  - `getDir(name, isPublic)`
  - `getDir(name)`
  - `flushSd(successCallback, failCallback)`

- 对应文件：`07-file-storage.md`


## $floaty

- 方法/成员（文档标题）:
  - `getPermit()`
  - `hasPermit()`
  - `newAdj(xmlOrPath)`
  - `newApp(xmlOrPath)`
  - `newApp(xmlOrPath, touchable)`
  - `newSys(xmlOrPath)`
  - `newSys(xmlOrPath, touchable)`
  - `newSelect(callback)`
  - `closeAll()`

- 对应文件：`13-floaty-dialogs.md`


## $global

- 方法/成员（文档标题）:
  - `sleep(ms)`
  - `tip(info)`
  - `alert(title, msg)`
  - `showImg(img)`
  - `closeLog()`
  - `closeDraw()`
  - `clearDraw()`
  - `getClip()`
  - `setClip(text)`
  - `hasClip()`
  - `clearClip()`
  - `curPkg()`
  - `curCls()`
  - `curTime()`
  - `info(msg)`
  - `infoLog(msg)`
  - `toast(msg)`
  - `toastLog(msg)`
  - `log(msg)`
  - `print(msg)`
  - `random()`
  - `random(max)`
  - `random(min, max)`
  - `require(path)`

- 对应文件：`16-global-media-utils.md`


## $hid

- 方法/成员（文档标题）:
  - `init()`
  - `isOn()`
  - `dexBeat()`
  - `getBatteryLevel()`
  - `isCharging()`
  - `setPowerOff()`
  - `setPowerOn()`
  - `click(x, y)`
  - `click(index)`
  - `longClick(x, y, dur)`
  - `longClick(index)`
  - `swipEx(x1, y1, x2, y2)`
  - `swipEx(x1, y1, x2, y2, press, time, delay)`
  - `touchDown(id, x, y)`
  - `touchMove(id, x, y)`
  - `touchUp(id)`
  - `keyPress(keyCode)`
  - `keyPress(modify, keyCode)`
  - `home()`
  - `back()`
  - `recents()`
  - `recentsV2()`
  - `selectAll()`
  - `cut()`
  - `copy()`
  - `paste()`
  - `paste(text)`
  - `inputSimple(text)`
  - `delete()`
  - `delete(len)`
  - `backspace()`
  - `backspace(len)`

- 对应文件：`02-core-automation.md`


## $html

- 方法/成员（文档标题）:
  - `escape(html)`
  - `unescape(text)`
  - `cleanHtmlTag(text)`
  - `removeHtmlTag(text, tagNames)`
  - `unwrapHtmlTag(text, tagNames)`
  - `removeHtmlTag(text, withTagContent, tagNames)`
  - `removeHtmlAttr(html, attrs)`
  - `removeAllHtmlAttr(html, tagNames)`
  - `filter(html)`
  - `getWeiYunNote(shortLink)`

- 对应文件：`08-network.md`


## $http

- 方法/成员（文档标题）:
  - `uri(uri)`
  - `get(url)`
  - `get(opts)`
  - `post(opts)`
  - `del(opts)`
  - `delete(opts)`
  - `put(opts)`
  - `patch(opts)`
  - `download(url, savePath)`
  - `download(url, savePath, completeCallback)`
  - `download(url, savePath, completeCallback, onFailure)`
  - `download(url, savePath, progressListener, completeCallback, onFailure)`
  - `wifiIp()`

- 对应文件：`08-network.md`


## $img

- 方法/成员（文档标题）:
  - `read(imgPath)`
  - `open(imgPath)`
  - `open(bitmap)`
  - `read(imgFile)`
  - `save(image, path, format, quality)`
  - `save(image, path)`
  - `toBase64(image, format, quality)`
  - `toBase64(image)`
  - `toBase64(path)`
  - `readBase64(base64)`
  - `clip(image, x, y, w, h)`
  - `resize(image, w, h, interpolation)`
  - `resize(image, w, h)`
  - `scale(image, scaleX, scaleY, interpolation)`
  - `scale(image, scaleX, scaleY)`
  - `rotate(image, degree, x, y)`
  - `rotate(image, degree)`
  - `rotate(image)`
  - `concat(img1, img2, dir)`
  - `gray(image)`
  - `threshold(image, thre)`
  - `adaptiveThreshold(image, maxValue, adaptiveMethod, thresholdType, blockSize, C)`
  - `cvtColor(img, code, dstCn)`
  - `cvtColor(img, code)`
  - `inRange(img, lowerBound, upperBound)`
  - `blur(img, size, point, type)`
  - `medianBlur(img, size)`
  - `gaussianBlur(img, size, sigmaX, sigmaY, type)`
  - `flip(image)`
  - `upside(image)`
  - `flip(image, sx, sy)`
  - `putTop(bigImg, smallImg, x, y)`
  - `findColor(image, color, threshold, x, y, w, h)`
  - `findColor(image, color, threshold, region)`
  - `findColor(image, color, threshold)`
  - `findColor(image, color)`
  - `findMultiColors(image, region, color, threshold, colors)`
  - `findImg(bigImg, minImg, options)`
  - `findImg(bigImg, minImg)`
  - `findImgAll(bigImg, minImg, options)`
  - `findImgAll(bigImg, minImg)`
  - `show(image)`
  - `show(path)`

- 对应文件：`05-image-vision.md`


## $log

- 方法/成员（文档标题）:
  - `i(args)`
  - `info(args)`
  - `d(args)`
  - `debug(args)`
  - `w(args)`
  - `warn(args)`
  - `e(args)`
  - `err(args)`
  - `v(args)`
  - `log(args)`
  - `print(args)`
  - `floaty()`
  - `closeFloaty()`
  - `activity()`
  - `delete()`

- 对应文件：`16-global-media-utils.md`


## $media

- 方法/成员（文档标题）:
  - `play(path)`
  - `create()`
  - `create(path)`
  - `setPath(mediaPlayer, path)`

- 对应文件：`16-global-media-utils.md`


## $ocr

- 方法/成员（文档标题）:
  - `v(name)`
  - `init()`
  - `getPoint(word, options)`
  - `line(options)`
  - `detect(options)`
  - `detect64(base64)`
  - `detectPath(imgPath)`
  - `detectImg(img)`
  - `detectBitmap(bitmap)`

- 对应文件：`04-screen-ocr.md`


## $permit

- 方法/成员（文档标题）:
  - `floaty()`
  - `hasFloaty()`
  - `wza()`
  - `hasWza()`
  - `sd()`
  - `hasSd()`
  - `call()`
  - `hasCall()`
  - `set()`
  - `hasSet()`
  - `net()`
  - `hasNet()`
  - `camera()`
  - `hasCamera()`
  - `record()`
  - `hasRecord()`
  - `readSms()`
  - `hasReadSms()`
  - `sendSms()`
  - `hasSendSms()`
  - `readContact()`
  - `hasReadContact()`
  - `writeContact()`
  - `hasWriteContact()`
  - `loc()`
  - `hasLoc()`
  - `readCalendar()`
  - `hasReadCalendar()`
  - `writeCalendar()`
  - `hasWriteCalendar()`
  - `hasPermit(permitName)`
  - `hasPermit(permitNames)`
  - `getPermit(permitNames)`
  - `getPermit(permitName)`
  - `hasNotifyAccess()`
  - `notifyAccess()`
  - `hasReadVideo()`
  - `readVideo()`
  - `hasReadImage()`
  - `readImage()`
  - `hasReadAudio()`
  - `readAudio()`
  - `hasReadMedia()`
  - `readMedia()`

- 对应文件：`06-system-permission.md`


## $plugin

- 方法/成员（文档标题）:
  - `load(packageName)`
  - `ls()`

- 对应文件：`15-extensions.md`


## $qr

- 方法/成员（文档标题）:
  - `make(content)`
  - `make(content, options)`
  - `parse(path)`
  - `parse(image)`
  - `parse(x, y, w, h)`
  - `parse(region)`
  - `parse(rect)`

- 对应文件：`16-global-media-utils.md`


## $res

- 方法/成员（文档标题）:
  - `create(appName)`
  - `set(resName, resData)`
  - `get(resName)`
  - `get(resName, defaultValue)`
  - `load(path)`
  - `ls()`
  - `cat()`
  - `dump(path)`

- 对应文件：`07-file-storage.md`


## $root

- 方法/成员（文档标题）:
  - `hasPermit()`
  - `getPermit()`
  - `enablePointer(enable)`
  - `click(x, y)`
  - `click(x, y, dur)`
  - `click(x, y, dur, delay)`
  - `click(index)`
  - `click(index, dur)`
  - `click(index, dur, delay)`
  - `press(x, y)`
  - `press(x, y, dur)`
  - `press(x, y, dur, delay)`
  - `move(x1, y1, x2, y2)`
  - `move(x1, y1, x2, y2, dur)`
  - `move(x1, y1, x2, y2, dur, delay)`
  - `lock()`
  - `unlock()`
  - `power()`
  - `exec(cmd)`
  - `exeRootShell(cmd)`
  - `exeRootShell(cmd, output)`
  - `exeRootShell(cmd, output, terminate)`
  - `exeRootShell(cmd, output, terminate, complete)`
  - `exeShell(cmd)`
  - `exeShell(cmd, output)`
  - `exeShell(cmd, output, terminate)`
  - `exeShell(cmd, output, terminate, complete)`
  - `closeRootShell()`
  - `closeShell()`
  - `closeAll()`
  - `input(text)`
  - `killApp(pkgName)`
  - `lsRunningApps(callback)`
  - `home()`
  - `back()`
  - `menu()`
  - `recent()`
  - `setWmSize(width, height)`
  - `setDpi(density)`
  - `resetWm()`
  - `key(keyName)`

- 对应文件：`06-system-permission.md`


## $screen

- 方法/成员（文档标题）:
  - `getPermit()`
  - `getPermitOnce()`
  - `hasPermit()`
  - `hasRecord()`
  - `onlyRecord(onlyRecord)`
  - `getScreen()`
  - `bright(bright)`
  - `dir(degree)`
  - `getHeight()`
  - `getWidth()`
  - `getScreenInfo()`
  - `info()`
  - `getDensity()`
  - `isScreenOff()`
  - `isScreenOn()`
  - `split(tranCut, vertCut, index)`
  - `save(path)`
  - `mustV()`
  - `mustH()`
  - `cancelMust()`

- 对应文件：`04-screen-ocr.md`


## $sqlite

- 方法/成员（文档标题）:
  - `newSqlite()`
  - `open(dbName, external)`
  - `open(dbName)`
  - `newTab(tableName, columns)`
  - `add(tableName, data)`
  - `update(tableName, map, where)`
  - `ls(tableName)`
  - `ls()`
  - `select(selectSql)`
  - `hasTab(tableName)`
  - `exe(sql)`
  - `delDb(external)`
  - `delDb(dbName, external)`
  - `delDb(dbName)`
  - `delTab(table)`
  - `close()`

- 对应文件：`07-file-storage.md`


## $storage

- 方法/成员（文档标题）:
  - `create(namespace)`
  - `get(key, defaultValue)`
  - `get(key)`
  - `put(key, value)`
  - `getStr(key)`
  - `getString(key)`
  - `getStr(key, defaultValue)`
  - `getString(key, defaultValue)`
  - `putStr(key, value)`
  - `putString(key, value)`
  - `getInt(key, defaultValue)`
  - `getInt(key)`
  - `putInt(key, value)`
  - `getBool(key, defaultValue)`
  - `getBoolean(key, defaultValue)`
  - `getBool(key)`
  - `getBoolean(key)`
  - `putBool(key, value)`
  - `putBoolean(key, value)`
  - `getFloat(key, defaultValue)`
  - `getFloat(key)`
  - `putFloat(key, value)`
  - `getLong(key, defaultValue)`
  - `getLong(key)`
  - `putLong(key, value)`
  - `getStrSet(key, defaultValue)`
  - `getStrSet(key)`
  - `putStrSet(key, value)`
  - `getAll()`
  - `has(key)`
  - `clear()`
  - `del(key)`

- 对应文件：`07-file-storage.md`


## $sys

- 方法/成员（文档标题）:
  - `airplane(enable)`
  - `volume(mode, volume)`
  - `getDeviceId()`
  - `hasClip()`
  - `clearClip()`
  - `getClip()`
  - `setClip(text)`
  - `ignorePower(pkgName)`
  - `requestIgnorePower(pkgName)`
  - `stayAlive(enable)`
  - `hasStayAlive()`
  - `hasPointer()`
  - `pointer(enable)`

- 对应文件：`06-system-permission.md`


## $szk

- 方法/成员（文档标题）:
  - `getPermit()`
  - `hasPermit()`
  - `enablePointer(enable)`
  - `waitPermit()`
  - `waitPermit(callback)`
  - `click(x, y)`
  - `click(x, y, dur)`
  - `click(x, y, dur, delay)`
  - `click(index)`
  - `click(index, dur)`
  - `click(index, dur, delay)`
  - `press(x, y)`
  - `press(x, y, dur)`
  - `press(x, y, dur, delay)`
  - `move(x1, y1, x2, y2)`
  - `move(x1, y1, x2, y2, dur)`
  - `move(x1, y1, x2, y2, dur, delay)`
  - `home()`
  - `back()`
  - `menu()`
  - `recent()`
  - `power()`
  - `lock()`
  - `unlock()`
  - `input(text)`
  - `killApp(pkgName)`
  - `setWmSize(width, height)`
  - `setDpi(density)`
  - `resetWm()`
  - `exe(cmd)`
  - `exe(cmd, infoCallback, errorCallback)`
  - `exe(cmd, infoCallback, errorCallback, endCallback)`
  - `exe(cmd, startCallback, infoCallback, errorCallback, endCallback)`

- 对应文件：`06-system-permission.md`


## $task

- 方法/成员（文档标题）:
  - `const {String} ID;`
  - `const {long} startTime;`
  - `const {String} name;`
  - `const {String} threadName;`
  - `const {String} path;`
  - `stop()`
  - `getInfo()`
  - `isRunning()`
  - `getID()`
  - `getStartTime()`
  - `getName()`
  - `getThreadName()`
  - `getPath()`
  - `getPath(relativePath)`
  - `pause()`
  - `start()`
  - `isPause()`
  - `isStop()`

- 对应文件：`14-concurrency-events.md`


## $thread

- 方法/成员（文档标题）:
  - `ui(runnable)`
  - `run(runnable)`
  - `create(runnable)`
  - `create(name, runnable)`
  - `newCdLock(num)`
  - `has(name)`
  - `get(name)`
  - `loop(name, runnable)`
  - `hasLoop(name)`
  - `stopLoop(name)`
  - `stop(threadx)`
  - `stop(threadName)`
  - `stopAll()`
  - `stopAllLoop()`

- 对应文件：`14-concurrency-events.md`


## $tip

- 方法/成员（文档标题）:
  - `i(msg)`
  - `v(msg)`
  - `w(msg)`
  - `e(msg)`
  - `d(msg)`
  - `input(title, callback)`
  - `input(title, def, callback)`
  - `input(title, hint, def, callback)`
  - `inputInt(title, callback)`
  - `inputInt(title, def, callback)`
  - `inputInt(title, hint, callback)`
  - `inputInt(title, hint, def, callback)`
  - `show(title, msg)`
  - `show(title, msg, click)`
  - `show(title, view)`
  - `show(title, view, click)`
  - `one(title, items, callback)`
  - `more(title, items, callback)`
  - `calendar(callback)`
  - `date(callback)`
  - `clock(callback)`
  - `time(callback)`

- 对应文件：`13-floaty-dialogs.md`


## $touch

- 方法/成员（文档标题）:
  - `hasPermit()`
  - `init()`
  - `touchDown(fingerId, x, y)`
  - `touchMove(fingerId, x, y)`
  - `touchUp(fingerId)`
  - `click(x, y)`
  - `click(pointerId, x, y)`
  - `click(pointerId, x, y, dur)`
  - `press(x, y)`
  - `press(pointerId, x, y)`
  - `press(pointerId, x, y, dur)`
  - `move(x, y, x2, y2)`
  - `move(x, y, x2, y2, dur)`
  - `move(pointerId, x, y, x2, y2, dur)`
  - `swipe(x, y, x2, y2, dur)`
  - `key(keyCode)`

- 对应文件：`02-core-automation.md`


## $tts

- 方法/成员（文档标题）:
  - `read(text, options)`
  - `read(text)`

- 对应文件：`16-global-media-utils.md`


## $ui

- 方法/成员（文档标题）:
  - `界面线程(回调函数)`
  - `解析布局(xml内容或者路径)`
  - `创建底部弹窗(活动对象)`
  - `土司(文本)`
  - `土司(文本, 重力)`
  - `转px(dp)`
  - `转dp(像素)`

- 对应文件：`09-ui-core.md`


## $ws

- 方法/成员（文档标题）:
  - `create(url)`

- 对应文件：`08-network.md`


## $yolo

- 方法/成员（文档标题）:
  - `create(version)`
  - `has(id)`
  - `get(id)`
  - `close(id)`
  - `closeAll()`

- 对应文件：`05-image-vision.md`


## 01.环境搭建

- 方法/成员（文档标题）:
  - `1.下载安卓端安装包`
  - `2.下载电脑端开发工具`
  - `1.安装安卓端`
  - `2.安装电脑端开发工具`

- 对应文件：`01-getting-started.md`


## 02.链接调试

- 方法/成员（文档标题）:
  - `01.局域网调试`
  - `02.ADB调试`

- 对应文件：`01-getting-started.md`


## AdjFloaty

- 方法/成员（文档标题）:
  - `const {WindowManager.LayoutParams} params;`
  - `const {WindowManager} manager;`
  - `id(id)`
  - `close()`
  - `getW()`
  - `getX()`
  - `getY()`
  - `getH()`

- 对应文件：`13-floaty-dialogs.md`


## AppFloaty

- 方法/成员（文档标题）:
  - `const {WindowManager.LayoutParams} params;`
  - `const {WindowManager} manager;`
  - `onScreenChange(callback)`
  - `id(id)`
  - `fill(fill)`
  - `touch(touchable)`
  - `setX(x)`
  - `setY(y)`
  - `setXY(x, y)`
  - `setW(w)`
  - `setH(h)`
  - `setWH(w, h)`
  - `check()`
  - `close()`

- 对应文件：`13-floaty-dialogs.md`


## AppInfo

- 方法/成员（文档标题）:
  - `const {String} appName;`
  - `const {String} pkgName;`
  - `const {Image} icon;`
  - `const {ApplicationInfo} info;`
  - `getAppName()`
  - `getPkgName()`
  - `getIcon()`
  - `getInfo()`
  - `json()`

- 对应文件：`03-app-management.md`


## AppTaskInfo

- 方法/成员（文档标题）:
  - `const {String} appName;`
  - `const {String} pkgName;`
  - `const {String} lastUseTime;`
  - `const {long} lastUsedTime;`
  - `const {ApplicationInfo} info;`
  - `getLastUsedTime()`
  - `getAppName()`
  - `getPkgName()`
  - `getLastUseTime()`
  - `json()`

- 对应文件：`03-app-management.md`


## CdLock

- 方法/成员（文档标题）:
  - `ok()`
  - `finish()`
  - `finish(timeout)`
  - `getCount()`

- 对应文件：`14-concurrency-events.md`


## color-颜色属性对照表

- 方法/成员（文档标题）:
  - `1. 属性颜色`
  - `2. 名称颜色`

- 对应文件：`09-ui-core.md`


## DateInfo

- 方法/成员（文档标题）:
  - `const {long} stamp;`
  - `const {int} year;`
  - `const {int} month;`
  - `const {int} day;`
  - `const {int} week;`
  - `const {int} hour;`
  - `const {int} min;`
  - `const {int} sec;`
  - `const {int} mil;`
  - `getStamp()`
  - `getYear()`
  - `getMonth()`
  - `getDay()`
  - `getWeek()`
  - `getHour()`
  - `getMin()`
  - `getSec()`
  - `getMil()`
  - `json()`

- 对应文件：`16-global-media-utils.md`


## FcConfig

- 方法/成员（文档标题）:
  - `const {String} mode;`
  - `const {String} type;`
  - `const {String} path;`
  - `const {String} root;`
  - `const {String} ext;`

- 对应文件：`07-file-storage.md`


## Image

- 方法/成员（文档标题）:
  - `const {int} width;`
  - `const {int} height;`
  - `getBitmap()`
  - `width()`
  - `height()`
  - `getWidth()`
  - `getHeight()`
  - `close()`
  - `recycle()`
  - `pixel(x, y)`
  - `pixel(point)`
  - `save(path)`
  - `show()`
  - `copy()`
  - `base64()`
  - `json()`

- 对应文件：`05-image-vision.md`


## JsTaskInfo

- 方法/成员（文档标题）:
  - `const {String} ID;`
  - `const {String} startTime;`
  - `const {String} endTime;`
  - `const {String} runTime;`
  - `const {String} name;`
  - `const {String} path;`
  - `getID()`
  - `getStartTime()`
  - `getName()`
  - `getPath()`

- 对应文件：`14-concurrency-events.md`


## LoadExtConfig

- 方法/成员（文档标题）:
  - `const {List<String>} path;`
  - `const {List<LoadSoConfig>} so;`

- 对应文件：`15-extensions.md`


## LoadSoConfig

- 方法/成员（文档标题）:
  - `const {String} path;`
  - `const {boolean} load;`

- 对应文件：`15-extensions.md`


## MenuBody

- 方法/成员（文档标题）:
  - `add(menu)`
  - `show()`
  - `name(name)`
  - `margin(left, right)`
  - `radius(radius)`
  - `global(isGlobalShow)`
  - `dur(expandAnimDur)`
  - `x(x)`
  - `y(y)`

- 对应文件：`13-floaty-dialogs.md`


## MenuItem

- 方法/成员（文档标题）:
  - `style(style)`
  - `click(click)`
  - `ripper(color)`
  - `tip(tip)`
  - `bg(color)`
  - `radius(radius)`
  - `icon(resName)`
  - `iconPadding(padding)`
  - `iconSize(size)`
  - `cancelIconTint()`
  - `iconTint(color)`
  - `getW()`
  - `getH()`

- 对应文件：`13-floaty-dialogs.md`


## Node

- 方法/成员（文档标题）:
  - `const {Integer} x;`
  - `const {Integer} y;`
  - `const {Integer} w;`
  - `const {Integer} h;`
  - `const {Integer} cx;`
  - `const {Integer} cy;`
  - `const {Boolean} clickable;`
  - `const {Boolean} longClickable;`
  - `const {Boolean} enabled;`
  - `const {Boolean} selected;`
  - `const {Boolean} scrollable;`
  - `const {Boolean} checkable;`
  - `const {Boolean} checked;`
  - `const {Boolean} visible;`
  - `const {int[]} region;`
  - `const {Boolean} multiLine;`
  - `const {Integer} drawOrder;`
  - `const {String} desc;`
  - `const {String} tip;`
  - `const {String} id;`
  - `const {String} pkg;`
  - `const {String} cls;`
  - `const {String} text;`
  - `const {Integer} windowId;`
  - `const {AccessibilityNodeInfo} node;`
  - `parent()`
  - `childNum()`
  - `childs()`
  - `child(index)`
  - `getX()`
  - `getY()`
  - `getW()`
  - `getH()`
  - `getCx()`
  - `getCy()`
  - `getClickable()`
  - `getLongClickable()`
  - `getEnabled()`
  - `getSelected()`
  - `getScrollable()`
  - `getCheckable()`
  - `getChecked()`
  - `getRegion()`
  - `getMultiLine()`
  - `getDrawOrder()`
  - `getTip()`
  - `getDesc()`
  - `getId()`
  - `getPkg()`
  - `getCls()`
  - `getText()`
  - `getWindowId()`
  - `getNode()`
  - `click()`
  - `click(useAct)`
  - `click(px, py)`
  - `press()`
  - `press(dur)`
  - `press(px, py)`
  - `press(px, py, dur)`
  - `press(useAct)`
  - `move(dir)`
  - `move(x2, y2, dur)`
  - `move(x2, y2, dur, delay)`
  - `move(px, py, x2, y2, dur, delay)`
  - `draw()`
  - `input(text)`
  - `input(text, useAcc)`
  - `findFirst(selector)`
  - `findLast(selector)`
  - `find(selector, index)`
  - `findAll(selector)`

- 对应文件：`02-core-automation.md`


## OcrOptions

- 方法/成员（文档标题）:
  - `const {String} color;`
  - `const {Number[]} region;`
  - `const {Integer} threshold;`
  - `const {Boolean} gray;`
  - `const {Boolean} number;`
  - `const {Boolean} save;`
  - `const {String} savePath;`

- 对应文件：`04-screen-ocr.md`


## QrOptions

- 方法/成员（文档标题）:
  - `const {Integer} w;`
  - `const {Integer} h;`
  - `const {Integer} margin;`
  - `const {String} foreColor;`
  - `const {String} bgColor;`

- 对应文件：`16-global-media-utils.md`


## ScreenInfo

- 方法/成员（文档标题）:
  - `const {int} w;`
  - `const {int} h;`
  - `const {int} dpi;`
  - `const {float} xdpi;`
  - `const {float} ydpi;`
  - `const {float} density;`
  - `const {float} scaledDensity;`
  - `const {Boolean} isVertical;`
  - `const {Boolean} navShow;`
  - `const {int} navH;`
  - `const {Boolean} barShow;`
  - `const {int} barH;`
  - `getW()`
  - `getH()`
  - `getDpi()`
  - `isVertical()`
  - `getDensity()`
  - `isNavShow()`
  - `getNavH()`
  - `isBarShow()`
  - `getBarH()`
  - `getXdpi()`
  - `getYdpi()`
  - `getScaledDensity()`

- 对应文件：`04-screen-ocr.md`


## SelectFloaty

- 方法/成员（文档标题）:
  - `const {WindowManager.LayoutParams} params;`
  - `const {WindowManager} manager;`
  - `close()`

- 对应文件：`13-floaty-dialogs.md`


## Sheet

- 方法/成员（文档标题）:
  - `解析布局(xml内容或路径)`
  - `获得视图()`
  - `找控件(标识)`
  - `显示()`
  - `关闭()`

- 对应文件：`09-ui-core.md`


## SysFloaty

- 方法/成员（文档标题）:
  - `const {WindowManager.LayoutParams} params;`
  - `const {WindowManager} manager;`
  - `onScreenChange(callback)`
  - `id(id)`
  - `fill(fill)`
  - `touch(touchable)`
  - `setX(x)`
  - `setY(y)`
  - `setXY(x, y)`
  - `setW(w)`
  - `setH(h)`
  - `setWH(w, h)`
  - `check()`
  - `close()`

- 对应文件：`13-floaty-dialogs.md`


## Threadx

- 方法/成员（文档标题）:
  - `name()`
  - `hasRun()`
  - `setStr(str)`
  - `getStr()`
  - `setBool(booFlag)`
  - `getBool()`
  - `getInt()`
  - `setInt(flag)`
  - `getLong()`
  - `setLong(flag)`
  - `getObj()`
  - `setObj(flag)`
  - `kill()`

- 对应文件：`14-concurrency-events.md`


## TtsOptions

- 方法/成员（文档标题）:
  - `const {float} rate;`
  - `const {float} pitch;`
  - `const {float} volume;`
  - `const {String} language;`
  - `const {String} streamType;`

- 对应文件：`16-global-media-utils.md`


## UI

- 方法/成员（文档标题）:
  - `获得视图()`
  - `找控件(标识)`
  - `界面线程(回调函数)`
  - `土司(文本)`
  - `土司(文本, 重力)`
  - `显示()`
  - `结束()`
  - `获得活动对象()`
  - `当活动开始(回调)`
  - `当活动恢复(回调)`
  - `当活动暂停(回调)`
  - `当活动停止(回调)`
  - `当活动销毁(回调)`
  - `当活动重启(回调)`
  - `当活动结果(回调)`
  - `当上下文菜单创建(回调)`
  - `当选项菜单创建(回调)`
  - `当选项菜单面板创建(回调)`
  - `当选项菜单选中(回调)`
  - `当按键按下(回调)`
  - `当按键抬起(回调)`
  - `当按键长按(回调)`
  - `设置方向(方向)`

- 对应文件：`09-ui-core.md`


## UiSelector

- 方法/成员（文档标题）:
  - `screen(transCut, vertCut, index)`
  - `clickable(able)`
  - `visible(able)`
  - `longClickable(able)`
  - `enabled(able)`
  - `selected(able)`
  - `scrollable(able)`
  - `checkable(able)`
  - `checked(able)`
  - `region(x, y, w, h)`
  - `regionHas(x, y, w, h)`
  - `regionInside(x, y, w, h)`
  - `multiLine(able)`
  - `drawOrder(order)`
  - `desc(desc)`
  - `descNotNull(notNull)`
  - `descHas(desc)`
  - `descStart(desc)`
  - `descEnd(desc)`
  - `descMatch(regex)`
  - `windowId(id)`
  - `id(id)`
  - `idNotNull(notNull)`
  - `idHas(id)`
  - `idStart(id)`
  - `idEnd(id)`
  - `idMatch(regex)`
  - `tip(tip)`
  - `tipNotNull(notNull)`
  - `tipHas(tip)`
  - `tipStart(tip)`
  - `tipEnd(tip)`
  - `tipMatch(regex)`
  - `pkg(packageName)`
  - `pkgNotNull(notNull)`
  - `pkgHas(packageName)`
  - `pkgStart(packageName)`
  - `pkgEnd(packageName)`
  - `pkgMatch(regex)`
  - `cls(className)`
  - `clsNotNull(notNull)`
  - `clsHas(className)`
  - `clsStart(className)`
  - `clsEnd(className)`
  - `clsMatch(regex)`
  - `text(text)`
  - `textNotNull(notNull)`
  - `textHas(text)`
  - `textStart(text)`
  - `textEnd(text)`
  - `textMatch(regex)`
  - `or()`
  - `findAll()`
  - `find(index)`
  - `findFirst()`
  - `findLast()`
  - `waitAll()`
  - `waitAll(failCallback)`
  - `wait(index, failCallback)`
  - `wait(index)`
  - `waitFirst()`
  - `waitFirst(failCallback)`
  - `waitLast()`
  - `waitLast(failCallback)`
  - `setWaitTime(times)`
  - `setWaitDur(times)`
  - `setMainWindow(yes)`

- 对应文件：`02-core-automation.md`


## Ws

- 方法/成员（文档标题）:
  - `send(msg)`
  - `send(bytes)`
  - `send(byteString)`
  - `sendBase64(base64Str)`
  - `sendHex(hexStr)`
  - `cancel()`
  - `stop()`
  - `close()`
  - `close(code)`
  - `close(code, reason)`
  - `onMsgByte(callback)`
  - `onMsgStr(callback)`
  - `onOpen(callback)`
  - `onClosed(callback)`
  - `onClosing(callback)`
  - `onFail(onFailure)`

- 对应文件：`08-network.md`


## YoloObject

- 方法/成员（文档标题）:
  - `init(binPath, paramPath, labelPath)`
  - `init(binPath, paramPath, labels)`
  - `detect()`
  - `detect(img)`
  - `detect(bitmap)`
  - `detect(imgPath)`
  - `isInit()`
  - `setDir(dir)`
  - `setSize(w, h)`
  - `setUseGpu(use)`
  - `setProbThreshold(pt)`
  - `setNmsThreshold(nt)`
  - `setMeanVals(meanVals)`
  - `setNormVals(normVals)`
  - `setInputName(inputName)`
  - `setOutputName(outputName1)`
  - `setOutputName(outputName1, outputName2, outputName3)`
  - `getId()`
  - `recycle()`
  - `close()`

- 对应文件：`05-image-vision.md`


## YoloResult

- 方法/成员（文档标题）:
  - `const {boolean} success;`
  - `const {String} des;`
  - `const {String} err;`
  - `const {List<YoloResultCell>} data;`
  - `const {List<YoloResultCell>} 数据;`
  - `isSuccess()`
  - `setSuccess(success)`
  - `getDes()`
  - `setDes(des)`
  - `getData()`
  - `setData(data)`
  - `getErr()`
  - `setErr(err)`
  - `json()`
  - `json_zn()`

- 对应文件：`05-image-vision.md`


## 下拉框

- 方法/成员（文档标题）:
  - `监听选中(回调)`
  - `设置文字(文本)`
  - `获取文字()`
  - `刷新(数据)`

- 对应文件：`11-ui-controls-basic.md`


## 产品优势

- 方法/成员（文档标题）:
  - `1.回顾历史`
  - `2.无法还原`
  - `3.总结一下`
  - `1.文件选择`
  - `2.全局绘制`
  - `3.悬浮菜单`
  - `4.API方便`

- 对应文件：`01-getting-started.md`


## 分割线

- 方法/成员（文档标题）:
  - `设置粗细(粗细)`
  - `设置开始边距(开始边距)`
  - `设置结束边距(结束边距)`
  - `设置主题颜色(颜色)`

- 对应文件：`11-ui-controls-basic.md`


## 列表

- 方法/成员（文档标题）:
  - `滚动到顶部()`
  - `滚动到底部()`
  - `滚动(位置)`
  - `绑定持有者(持有者)`
  - `刷新(数据)`
  - `刷新(数据, 位置)`
  - `移除(位置)`
  - `添加(数据)`
  - `添加(数据, 位置)`
  - `清空()`
  - `获取数据()`

- 对应文件：`11-ui-controls-basic.md`


## 刷新布局

- 方法/成员（文档标题）:
  - `监听刷新(runnable)`

- 对应文件：`10-ui-layouts.md`


## 单选按钮

- 方法/成员（文档标题）:
  - `是选中的()`
  - `设置选中(状态)`
  - `监听选中(回调)`
  - `设置重力(重力)`
  - `设置文字(文本)`
  - `获取文字()`
  - `设置主题颜色(颜色)`
  - `设置文本颜色(颜色)`

- 对应文件：`11-ui-controls-basic.md`


## 单选按钮组

- 方法/成员（文档标题）:
  - `选中(下标)`
  - `监听选中(回调函数)`
  - `获取选中下标()`
  - `获取选中文本()`

- 对应文件：`11-ui-controls-basic.md`


## 卡片布局

- 方法/成员（文档标题）:
  - `设置可点击(可点击)`
  - `设置涟漪色(颜色)`
  - `设置背景颜色(颜色)`
  - `设置填充色(颜色)`
  - `设置弧度(弧度)`

- 对应文件：`10-ui-layouts.md`


## 图片与图标

- 方法/成员（文档标题）:
  - `自动旋转(是否旋转)`
  - `自动旋转(是否旋转, 速度)`
  - `设置角度(角度)`
  - `设置图标(图标)`
  - `设置链接(链接)`
  - `设置路径(路径)`
  - `设置图片(位图)`
  - `获取图片()`

- 对应文件：`11-ui-controls-basic.md`


## 多选框

- 方法/成员（文档标题）:
  - `监听选中(回调)`
  - `是选中的()`
  - `设置选中(状态)`
  - `设置重力(重力)`
  - `设置文本(文本)`
  - `获取文本()`
  - `设置主题颜色(颜色)`
  - `设置文本颜色(颜色)`
  - `设置背景颜色(颜色)`

- 对应文件：`11-ui-controls-basic.md`


## 多页布局

- 方法/成员（文档标题）:
  - `设置下标(index)`
  - `获取下标()`
  - `绑定(xTab)`
  - `绑定(xNav)`
  - `监听界面切换(回调)`
  - `监听状态改变(回调)`

- 对应文件：`10-ui-layouts.md`


## 导航栏

- 方法/成员（文档标题）:
  - `设置背景颜色(颜色)`
  - `设置图标颜色(颜色)`
  - `设置文本颜色(颜色)`
  - `设置选中颜色(颜色)`
  - `选中(索引)`
  - `菜单(回调)`

- 对应文件：`11-ui-controls-basic.md`


## 小片

- 方法/成员（文档标题）:
  - `设置选中(状态)`
  - `是选中的()`
  - `关闭事件(回调)`
  - `选中事件(回调)`
  - `设置文本(文本)`
  - `获取文本()`

- 对应文件：`11-ui-controls-basic.md`


## 小片组

- 方法/成员（文档标题）:
  - `选中(文本)`
  - `反选(文本)`
  - `选中(下标)`
  - `子项数量()`
  - `获得子项(下标)`

- 对应文件：`11-ui-controls-basic.md`


## 工具栏

- 方法/成员（文档标题）:
  - `菜单(回调)`

- 对应文件：`11-ui-controls-basic.md`


## 布局父类

- 方法/成员（文档标题）:
  - `添加视图(xView)`
  - `添加视图(view)`
  - `移除视图(xView)`
  - `移除视图(view)`
  - `移除视图(index)`
  - `移除视图(from, to)`
  - `移除所有视图()`

- 对应文件：`10-ui-layouts.md`


## 应用条

- 方法/成员（文档标题）:
  - `设置标题(标题)`
  - `设置副标题(副标题)`
  - `设置标题颜色(颜色)`
  - `设置副标题颜色(颜色)`
  - `设置背景颜色(颜色)`
  - `监听返回(回调)`
  - `监听菜单(回调)`
  - `绑定(抽屉)`

- 对应文件：`11-ui-controls-basic.md`


## 应用条布局

- 方法/成员（文档标题）:
  - `设置背景颜色(颜色)`

- 对应文件：`10-ui-layouts.md`


## 开关

- 方法/成员（文档标题）:
  - `设置选中(状态)`
  - `是选中的()`
  - `监听选中(回调)`
  - `设置重力(重力)`
  - `设置文本(文本)`
  - `获取文本()`
  - `设置主题颜色(颜色)`
  - `设置文本颜色(颜色)`

- 对应文件：`11-ui-controls-basic.md`


## 悬浮按钮

- 方法/成员（文档标题）:
  - `显示()`
  - `隐藏()`
  - `设置主题颜色(颜色)`
  - `设置图标(图标)`
  - `设置提示(提示)`

- 对应文件：`11-ui-controls-basic.md`


## 拖动条

- 方法/成员（文档标题）:
  - `onChange(callback)`
  - `getValue()`
  - `getMin()`
  - `getMax()`
  - `setValue(value)`
  - `setMax(value)`
  - `setMin(value)`

- 对应文件：`11-ui-controls-basic.md`


## 按钮

- 方法/成员（文档标题）:
  - `设置重力(重力)`
  - `设置字体(字体)`
  - `设置主题颜色(颜色值)`
  - `设置文本(文本)`
  - `获取文本()`
  - `设置文本颜色(颜色)`
  - `设置涟漪颜色(颜色)`
  - `设置弧度(弧度)`
  - `设置文本尺寸(尺寸)`
  - `设置图标(图标)`
  - `设置图标颜色(颜色)`
  - `设置图标尺寸(尺寸)`
  - `设置图标内边距(内边距)`

- 对应文件：`11-ui-controls-basic.md`


## 按钮组

- 方法/成员（文档标题）:
  - `选中(下标)`
  - `监听选中(回调函数)`

- 对应文件：`11-ui-controls-basic.md`


## 文本

- 方法/成员（文档标题）:
  - `设置文本(文本内容)`
  - `设置颜色(颜色)`
  - `设置背景颜色(颜色)`
  - `设置尺寸(尺寸)`
  - `获取文本()`

- 对应文件：`11-ui-controls-basic.md`


## 滑动布局

- 方法/成员（文档标题）:
  - `监听滚动(callback)`

- 对应文件：`10-ui-layouts.md`


## 滑动条

- 方法/成员（文档标题）:
  - `设置背景颜色(颜色)`
  - `设置主题颜色(颜色)`
  - `标签格式化(回调)`
  - `监听变化(回调)`
  - `获取值()`
  - `设置值(数值)`
  - `设置开始值(开始值)`
  - `设置进步值(进步值)`
  - `设置结束值(结束值)`
  - `设置数据(开始, 结束)`
  - `设置数据(开始, 结束, 当前值)`

- 对应文件：`11-ui-controls-basic.md`


## 滚动布局

- 方法/成员（文档标题）:
  - `监听滚动(callback)`

- 对应文件：`10-ui-layouts.md`


## 状态栏

- 方法/成员（文档标题）:
  - `设置颜色(颜色)`

- 对应文件：`12-ui-controls-advanced.md`


## 编辑框

- 方法/成员（文档标题）:
  - `获取文字()`
  - `设置错误(提示)`
  - `设置文字(文本)`
  - `监听文本改变(回调)`
  - `监听文本改变后(回调)`
  - `监听文本改变前(回调)`

- 对应文件：`11-ui-controls-basic.md`


## 网页

- 方法/成员（文档标题）:
  - `onLoaded(onLoad)`
  - `clear()`
  - `loadUrl(url)`
  - `loadHtml(html)`
  - `loadFile(path)`
  - `callJs(functionName, callBack)`
  - `callJs(functionName)`
  - `callJsInt(functionName, param, callBack)`
  - `callJsInt(functionName, param)`
  - `callJsLong(functionName, param, callBack)`
  - `callJsLong(functionName, param)`
  - `callJsDouble(functionName, param, callBack)`
  - `callJsDouble(functionName, param)`
  - `callJsFloat(functionName, param, callBack)`
  - `callJsFloat(functionName, param)`
  - `callJsChar(functionName, param, callBack)`
  - `callJsChar(functionName, param)`
  - `callJsBool(functionName, param, callBack)`
  - `callJsBool(functionName, param)`
  - `callJsStr(functionName, param, callBack)`
  - `callJsStr(functionName, param)`
  - `addFunc(funcName, callback)`

- 对应文件：`12-ui-controls-advanced.md`


## 范围

- 方法/成员（文档标题）:
  - `标签格式化(回调)`
  - `监听变化(回调)`
  - `获取范围()`
  - `设置数据(开始, 结束)`

- 对应文件：`12-ui-controls-advanced.md`


## 视频

- 方法/成员（文档标题）:
  - `onComplete(callback)`
  - `onPrepare(callback)`
  - `onError(callback)`
  - `onInfo(callback)`
  - `path(path)`
  - `uri(uri)`
  - `start()`
  - `pause()`
  - `stop()`
  - `resume()`
  - `suspend()`
  - `keepScreen(keep)`
  - `seekTo(ms)`
  - `isPlaying()`
  - `getDur()`
  - `getCur()`
  - `canPause()`
  - `canSeekBackward()`
  - `canSeekForward()`
  - `getBufferPercentage()`

- 对应文件：`12-ui-controls-advanced.md`


## 轨道

- 方法/成员（文档标题）:
  - `设置背景颜色(颜色)`
  - `设置图标颜色(颜色)`
  - `设置文本颜色(颜色)`
  - `设置选中颜色(颜色)`
  - `选中(索引)`
  - `菜单(回调)`

- 对应文件：`12-ui-controls-advanced.md`


## 输入框

- 方法/成员（文档标题）:
  - `设置提示(提示)`
  - `设置背景颜色(颜色)`
  - `设置边框颜色(颜色)`
  - `设置边框宽度(宽度)`
  - `设置弧度(左上, 上右, 左下, 右下)`
  - `设置文字(文本)`
  - `获取文字()`
  - `设置错误(提示)`
  - `获取编辑框()`
  - `监听文本改变(回调)`
  - `监听文本改变后(回调)`
  - `监听文本改变前(回调)`
  - `监听焦点改变(回调)`

- 对应文件：`11-ui-controls-basic.md`


## 进度条

- 方法/成员（文档标题）:
  - `设置进度(进度值)`
  - `设置最大值(最大值)`
  - `获取进度()`
  - `显示()`
  - `隐藏()`

- 对应文件：`11-ui-controls-basic.md`
