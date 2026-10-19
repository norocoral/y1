/* =========================================================
   i18n.js: English / Korean switcher.

   HOW IT WORKS
   The English text stays in index.html. This file holds a list of
   [English text, Korean text] pairs. When Korean is chosen, the
   script finds every element whose text exactly matches an English
   entry and swaps in the Korean version. Switching back restores
   the original English.

   HOW TO EDIT
   - If you change English text in index.html, change the matching
     English entry here too, or that line will simply stay in English.
   - Korean text can contain <code>, <strong> and <a> tags. Links (<a>)
     keep the href from the English version automatically.
   - To find lines with no translation, open the site with
     ?i18n=debug on the end of the address, switch to Korean and
     look in the browser console.
   ========================================================= */

const TRANSLATIONS = [

  /* ---------- Header ---------- */
  [`Why pick me?`, `왜 선택해야 하나요?`],
  [`Install`, `설치`],
  [`Technical`, `기술 문서`],

  /* ---------- Hero ---------- */
  [`The most stable CFW for your Innioasis Y1: Nugget for Y1`, `Innioasis Y1을 위한 가장 안정적인 커스텀 펌웨어: Nugget for Y1`],
  [`Nugget for Y1 makes your Innioasis Y1 last longer, be faster and easier to use with Rockbox. Based on Linux, running Rockbox, it's stable and open.`,
   `Nugget for Y1은 Innioasis Y1의 배터리를 더 오래 쓰게 하고, Rockbox를 더 빠르고 쉽게 쓸 수 있게 해줘요. 리눅스 기반으로 Rockbox를 실행해서 안정적이고 오픈 소스예요.`],
  [`Install today`, `지금 설치하기`],
  [`Scroll down`, `아래로 스크롤`],

  /* ---------- Battery ---------- */
  [`2.5x the battery life`, `배터리 수명 2.5배`],
  [`It's really the same device??`, `정말 같은 기기 맞아요??`],
  [`Rockbox on Android`, `Android 기반 Rockbox`],
  [`Stock firmware (Android)`, `기본 펌웨어 (Android)`],
  [`With Nugget Y1!`, `Nugget Y1과 함께!`],
  [`Battery life is tested with AAC audio playing through wired earphones, volume at 50dB, WiFi and Bluetooth disabled. Visuals are an approximation. Battery hours are rounded up to the nearby value. Values may not be accurate and can fluctuate with variables.`,
   `배터리 수명은 AAC 오디오를 유선 이어폰으로 재생하고, 볼륨 50dB, Wi-Fi와 블루투스를 끈 상태에서 측정했습니다. 그래프는 대략적인 근사치입니다. 배터리 시간은 가까운 값으로 올림했습니다. 수치는 정확하지 않을 수 있으며 조건에 따라 달라질 수 있습니다.`],

  /* ---------- Features ---------- */
  [`Why not just use the Android version?`, `그냥 Android 버전을 쓰면 안 될까요?`],
  [`Normally, Rockbox for the Y1 run as an app on top of Android 4.2.2. Why pick us?`,
   `보통 Y1용 Rockbox는 Android 4.2.2 위에서 앱으로 실행돼요. 그런데 왜 저희를 골라야 할까요?`],
  [`No battery drain`, `배터리 낭비 없음`],
  [`Android keeps a whole, dated phone operating system awake behind your music. We took it out and you get 2.5x the battery life.`,
   `Android는 음악 뒤에서 오래된 스마트폰 운영체제 전체를 계속 켜 두어요. 저희는 이를 없애서 배터리 수명이 2.5배가 되었어요.`],
  [`Straight into Rockbox`, `바로 Rockbox로`],
  [`Power on and in under 10 seconds you're in. Power off or reboot right from the Rockbox menu.`,
   `전원을 켜면 10초 안에 바로 Rockbox가 열려요. 전원 끄기와 재부팅도 Rockbox 메뉴에서 바로 할 수 있어요.`],
  [`Properly loud`, `충분히 큰 소리`],
  [`The headphone amp runs at full strength, matching the stock maximum volume.`,
   `헤드폰 앰프가 최대 출력으로 동작해서, 기본 펌웨어의 최대 볼륨과 같은 수준이에요.`],
  [`Adjust the power`, `전력 조절`],
  [`Save battery in power-saver mode or overclock for heavy stuff.`,
   `절전 모드로 배터리를 아끼거나, 무거운 작업을 위해 오버클럭할 수 있어요.`],
  [`Support iPod Rockbox themes`, `iPod Rockbox 테마 지원`],
  [`Natively supports iPod themes. Just adjust the screen size to Classic mode.`,
   `iPod 테마를 기본으로 지원해요. 화면 크기를 Classic 모드로 맞추기만 하면 돼요.`],
  [`It's still all Rockbox`, `여전히 완전한 Rockbox`],
  [`Every audio format, themes and fonts are supported.`, `모든 오디오 형식, 테마, 글꼴을 지원해요.`],

  /* ---------- Install ---------- */
  [`Installing takes a few minutes`, `설치는 몇 분이면 끝나요`],
  [`Nugget for Y1 Tool (Recommended)`, `Nugget for Y1 도구 (권장)`],
  [`Download our tool`, `도구 다운로드`],
  [`We built a tool for Mac and Windows that automatically sets up everything. It's safe, check our source code.`,
   `Mac과 Windows에서 모든 설정을 자동으로 해 주는 도구를 만들었어요. 안전하며, 소스 코드를 직접 확인할 수 있어요.`],
  [`Follow the instructions on screen`, `화면의 안내를 따르세요`],
  [`The app will guide you through the process of flashing and set up everything automatically.`,
   `앱이 플래시 과정을 안내하고 모든 것을 자동으로 설정해요.`],
  [`Turn it on and configure`, `전원을 켜고 설정하기`],
  [`When you're done, you can adjust settings and download themes.`, `완료되면 설정을 조정하고 테마를 내려받을 수 있어요.`],
  [`Download tool`, `도구 다운로드`],
  [`WARNING: Flashing replaces the stock firmware. While extremely rare, it can cause the malfunction of the device. We are not responsible of the damage to your device. Only the Y1 TypeA device is supported.`,
   `경고: 플래시하면 기본 펌웨어가 교체됩니다. 매우 드물지만 기기가 오작동할 수 있습니다. 기기 손상에 대해 저희는 책임지지 않습니다. Y1 TypeA 기기만 지원됩니다.`],
  [`Or`, `또는`],
  [`Download Innioasis Updater CE`, `Innioasis Updater CE 다운로드`],
  [`Nugget for Y1 is now available in the Innioasis Updater CE.`, `Nugget for Y1을 이제 Innioasis Updater CE에서 사용할 수 있어요.`],
  [`Change the software to Nugget`, `소프트웨어를 Nugget으로 변경`],
  [`Once the app is open and drivers are installed, select 'Nugget for Y1' in the software dropdown. The app will guide you through the process of flashing.`,
   `앱을 열고 드라이버를 설치한 후, 소프트웨어 드롭다운에서 'Nugget for Y1'을 선택하세요. 앱이 플래시 과정을 안내해요.`],
  [`Turn it on and plug it in`, `전원을 켜고 연결하기`],
  [`When flashing is complete, turn on Y1. You will see a screen telling you to plug in the device to the PC, do this.`,
   `플래시가 끝나면 Y1의 전원을 켜세요. 기기를 PC에 연결하라는 화면이 나타나면 연결해 주세요.`],
  [`Download .rockbox and put it on the device`, `.rockbox를 내려받아 기기에 넣기`],
  [`Download the ZIP from our GitHub. Extract it to the Y1, making sure .rockbox is there.`,
   `GitHub에서 ZIP 파일을 내려받아 Y1에 압축을 풀어 주세요. .rockbox 폴더가 있는지 꼭 확인하세요.`],
  [`Unplug it, turn it on and configure`, `연결을 해제하고 전원을 켠 뒤 설정하기`],
  [`Download Innioasis Updater`, `Innioasis Updater 다운로드`],

  /* ---------- Info and footer ---------- */
  [`Work in progress`, `개발 중`],
  [`Because this is our own stack of software, 100% feature parity is not certain.`,
   `저희가 직접 만든 소프트웨어 스택이기 때문에, 모든 기능이 100% 동일하다고 보장할 수는 없어요.`],
  [`Not working`, `작동하지 않는 기능`],
  [`Wifi, Vibration, Internal Speaker, FM Radio`, `Wi-Fi, 블루투스, 진동, 내장 스피커, FM 라디오`],
  [`Partially working`, `일부만 작동`],
  [`N/A`, `해당 없음`],
  [`About`, `소개`],
  [`Not affiliated with Innioasis. Built on the open source Rockbox project. GitHub`,
   `Innioasis와 관련이 없습니다. 오픈 소스 <a>Rockbox</a> 프로젝트를 기반으로 만들었습니다. <a>GitHub</a>`],

  /* ---------- Technical: overview ---------- */
  [`Technical documentation`, `기술 문서`],
  [`Nugget for Y1 is Hosted Rockbox running on a minimal Linux system, without an Android userspace, on the Innioasis Y1 (MediaTek MT6572, dual-core Cortex-A7).`,
   `Nugget for Y1은 Android 사용자 공간 없이 최소한의 리눅스 시스템 위에서 Hosted Rockbox를 실행하는 Innioasis Y1용 펌웨어입니다 (MediaTek MT6572, 듀얼코어 Cortex-A7).`],
  [`System overview`, `시스템 개요`],
  [`Boot: The MTK preloader and lk load the Linux kernel (zImage) directly into an initramfs root filesystem.`,
   `<strong>부팅:</strong> MTK 프리로더와 <code>lk</code>가 리눅스 커널(<code>zImage</code>)을 initramfs 루트 파일 시스템으로 직접 로드합니다.`],
  [`Init: A minimal C /init process mounts /proc, /sys and /dev, powers on the MT6323 headphone amplifier through /dev/eac, enables the audio clocks and activates click wheel scanning. It then detects and mounts the physical microSD card, links user directories into /, initializes USB Mass Storage and executes /rockbox.`,
   `<strong>초기화:</strong> 최소한의 C 프로그램인 <code>/init</code>이 <code>/proc</code>, <code>/sys</code>, <code>/dev</code>를 마운트하고, <code>/dev/eac</code>를 통해 MT6323 헤드폰 앰프를 켜고, 오디오 클럭을 활성화하며, 클릭 휠 스캔을 시작합니다. 이후 물리 microSD 카드를 감지해 마운트하고, 사용자 디렉터리를 <code>/</code>에 링크하고, USB 대용량 저장 장치를 초기화한 뒤 <code>/rockbox</code>를 실행합니다.`],
  [`Display: Direct Linux framebuffer output at 480x360, 32-bit ARGB8888, with dynamic bit shifts and an unblank refresh.`,
   `<strong>디스플레이:</strong> 480x360, 32비트 ARGB8888 형식으로 리눅스 프레임버퍼에 직접 출력하며, 동적 비트 시프트와 언블랭크 새로 고침을 사용합니다.`],
  [`Input: Linux evdev (/dev/input/event0 to event15) mapped to the click wheel, touch buttons, volume keys and center switch. Dedicated keymap contexts exist for the pitch screen, the quick screen and menus.`,
   `<strong>입력:</strong> 리눅스 evdev(<code>/dev/input/event0</code>~<code>event15</code>)를 클릭 휠, 터치 버튼, 볼륨 키, 중앙 스위치에 매핑합니다. 피치 화면, 퀵 화면, 메뉴에는 전용 키맵 컨텍스트가 있습니다.`],
  [`Audio: Direct PCM playback through /dev/eac with dynamic 44.1 kHz and 48 kHz switching, +12 dB analog gain and a logarithmic volume scale from -74 dB to +6 dB.`,
   `<strong>오디오:</strong> <code>/dev/eac</code>를 통한 직접 PCM 재생을 사용하며, 44.1 kHz와 48 kHz의 동적 전환, +12 dB 아날로그 게인, -74 dB~+6 dB의 로그 스케일 볼륨을 지원합니다.`],
  [`Storage: Only the physical microSD card is used. The internal eMMC is excluded. Supported file systems are vfat, exfat (SDXC, 256 GB and larger), ntfs and ext4, including multi-partition cards. PIVOT_ROOT presents the card as / to plugins.`,
   `<strong>저장소:</strong> 물리 microSD 카드만 사용하며 내장 eMMC는 제외됩니다. 지원하는 파일 시스템은 <code>vfat</code>, <code>exfat</code>(SDXC, 256 GB 이상), <code>ntfs</code>, <code>ext4</code>이며, 다중 파티션 카드도 지원합니다. <code>PIVOT_ROOT</code>는 플러그인에 카드를 <code>/</code>로 보이게 합니다.`],
  [`Missing .rockbox directory: A warning is shown on screen and USB Mass Storage remains active. Startup resumes once the directory is present on the card.`,
   `<strong><code>.rockbox</code> 디렉터리가 없는 경우:</strong> 화면에 경고가 표시되고 USB 대용량 저장 장치는 계속 활성 상태로 유지됩니다. 카드에 해당 디렉터리가 생기면 시작이 재개됩니다.`],
  [`Power management: CPU frequency scaling from 598 MHz to 1.3 GHz, an optional single-core mode, display timeout with backlight fading, and Power Off and Reboot entries in the System menu.`,
   `<strong>전원 관리:</strong> 598 MHz~1.3 GHz의 CPU 주파수 조절, 선택형 싱글 코어 모드, 백라이트 페이드가 적용되는 화면 시간 제한, 시스템 메뉴의 전원 끄기 및 재부팅 항목을 제공합니다.`],

  /* ---------- Technical: hardware table ---------- */
  [`Hardware specification`, `하드웨어 사양`],
  [`Memory`, `메모리`],
  [`Display`, `디스플레이`],
  [`Audio`, `오디오`],
  [`Primary storage`, `기본 저장소`],
  [`Additional partitions`, `추가 파티션`],
  [`USB storage`, `USB 저장소`],
  [`Boot image`, `부트 이미지`],
  [`Partition limit`, `파티션 크기 제한`],
  [`480x360 landscape, 32-bit ARGB8888 framebuffer (/dev/graphics/fb0, /dev/fb0), stride 1920 bytes`,
   `480x360 가로 방향, 32비트 ARGB8888 프레임버퍼 (<code>/dev/graphics/fb0</code>, <code>/dev/fb0</code>), 스트라이드 1920바이트`],
  [`MT6323 PMIC codec and amplifier (/dev/eac), 44.1 kHz and 48 kHz dynamic sink clock`,
   `MT6323 PMIC 코덱 및 앰프 (<code>/dev/eac</code>), 44.1 kHz와 48 kHz 동적 싱크 클럭`],
  [`microSD partition 1 (/dev/block/mmcblk1p1 or raw mmcblk1), mounted at /mnt/sdcard and mapped to /`,
   `microSD 파티션 1 (<code>/dev/block/mmcblk1p1</code> 또는 원시 <code>mmcblk1</code>), <code>/mnt/sdcard</code>에 마운트되어 <code>/</code>로 매핑됩니다`],
  [`Partition 2 at /mnt/extsd (Rockbox drive 1, <microSD1>), partition 3 at /mnt/extsd2, and so on`,
   `파티션 2는 <code>/mnt/extsd</code>(Rockbox 드라이브 1, <code>&lt;microSD1&gt;</code>), 파티션 3은 <code>/mnt/extsd2</code>와 같은 방식으로 이어집니다`],
  [`Android USB Mass Storage gadget, LUN0 bound to the microSD card before enable`,
   `Android USB 대용량 저장 장치 가젯, 활성화 전에 LUN0을 microSD 카드에 연결`],
  [`Android ANDROID! header, 2048-byte pages. Kernel load address 0x10008000, ramdisk load address 0x11000000, MTK header magic 0x58881688`,
   `Android <code>ANDROID!</code> 헤더, 2048바이트 페이지. 커널 로드 주소 <code>0x10008000</code>, 램디스크 로드 주소 <code>0x11000000</code>, MTK 헤더 매직 <code>0x58881688</code>`],

  /* ---------- Technical: implementation notes ---------- */
  [`Implementation notes`, `구현 노트`],
  [`Volume scaling`, `볼륨 스케일링`],
  [`Cause: sound_set_volume passes the volume to the codec in centibels (-10 dB is -100). pcm-eac.c multiplied this value by 10 again, so reducing the volume by 1 or 2 dB produced silence. dummy_codec.c also compared centibels against -74, which muted output at -7.4 dB.`,
   `<strong>원인:</strong> <code>sound_set_volume</code>은 볼륨을 센티벨 단위로 코덱에 전달합니다(-10 dB는 -100). <code>pcm-eac.c</code>가 이 값에 10을 한 번 더 곱해서, 볼륨을 1~2 dB만 낮춰도 소리가 나지 않았습니다. 또한 <code>dummy_codec.c</code>는 센티벨 값을 <code>-74</code>와 비교하여 -7.4 dB에서 출력이 음소거되었습니다.`],
  [`Resolution: The additional multiplication was removed, and audiohw_set_volume passes centibels directly to pcm_set_master_volume(). The mute threshold is -740, and dummy_codec.c compares against DUMMY_VOLUME_MIN * 10. The volume range is -74 dB to +6 dB in 1 dB steps. Analog headphone gain remains at +12 dB (0x0014).`,
   `<strong>해결:</strong> 추가 곱셈을 제거하여 <code>audiohw_set_volume</code>이 센티벨 값을 <code>pcm_set_master_volume()</code>에 그대로 전달합니다. 음소거 임계값은 <code>-740</code>이며, <code>dummy_codec.c</code>는 <code>DUMMY_VOLUME_MIN * 10</code>과 비교합니다. 볼륨 범위는 1 dB 단위로 -74 dB~+6 dB입니다. 아날로그 헤드폰 게인은 +12 dB(<code>0x0014</code>)로 유지됩니다.`],
  [`Dynamic sample rate switching`, `동적 샘플레이트 전환`],
  [`Cause: sink_set_freq() receives an index into sink->caps.samprs (0 for 44.1 kHz, 1 for 48 kHz). The function switched on case 48000, which never matched, so the default of 44.1 kHz was always used. 48 kHz tracks played approximately 8.8% slower than normal.`,
   `<strong>원인:</strong> <code>sink_set_freq()</code>는 <code>sink-&gt;caps.samprs</code>의 인덱스(0은 44.1 kHz, 1은 48 kHz)를 전달받습니다. 그런데 함수가 <code>case 48000</code>으로 분기해서 일치하는 경우가 없었고, 항상 기본값인 44.1 kHz가 사용되었습니다. 그 결과 48 kHz 트랙이 약 8.8% 느리게 재생되었습니다.`],
  [`Resolution: The index is translated with unsigned long sampr = (freq < HW_NUM_FREQ) ? hw_freq_sampr[freq] : freq; and the function switches on sampr. This configures the AFE DL1, IRQ MCU, I2S output and PMIC downlink registers for 48 kHz.`,
   `<strong>해결:</strong> 인덱스를 <code>unsigned long sampr = (freq &lt; HW_NUM_FREQ) ? hw_freq_sampr[freq] : freq;</code>로 변환하고, 함수가 <code>sampr</code>로 분기하도록 했습니다. 이를 통해 AFE DL1, IRQ MCU, I2S 출력, PMIC 다운링크 레지스터가 48 kHz로 설정됩니다.`],
  [`Advanced Key Lock (selective softlock)`, `고급 키 잠금 (선택적 소프트락)`],
  [`Location: Settings > General Settings > System > Advanced Key Lock.`,
   `<strong>위치:</strong> 설정 &gt; 일반 설정 &gt; 시스템 &gt; Advanced Key Lock.`],
  [`Keymap: button_context_wps[] did not chain to CONTEXT_STD and therefore lacked standard actions such as ACTION_STD_KEYLOCK. It now ends with LAST_ITEM_IN_LIST__NEXTLIST(CONTEXT_STD). button_context_tree is chained to CONTEXT_LIST, and ACTION_LIST_VOLUP and ACTION_LIST_VOLDOWN are defined in button_context_standard.`,
   `<strong>키맵:</strong> <code>button_context_wps[]</code>가 <code>CONTEXT_STD</code>로 연결되지 않아 <code>ACTION_STD_KEYLOCK</code> 같은 표준 동작이 없었습니다. 이제 <code>LAST_ITEM_IN_LIST__NEXTLIST(CONTEXT_STD)</code>로 끝납니다. <code>button_context_tree</code>는 <code>CONTEXT_LIST</code>에 연결되고, <code>ACTION_LIST_VOLUP</code>과 <code>ACTION_LIST_VOLDOWN</code>은 <code>button_context_standard</code>에 정의되어 있습니다.`],
  [`Filtering: While locked, the following may be left enabled: volume (keys, and the wheel in the WPS), play and pause, and skip and seek. Changes apply immediately because selectivesoftlock_set_mask calls set_selective_softlock_actions on every toggle.`,
   `<strong>필터링:</strong> 잠금 상태에서도 볼륨(키, 그리고 WPS의 휠), 재생 및 일시정지, 건너뛰기 및 탐색은 계속 사용하도록 설정할 수 있습니다. <code>selectivesoftlock_set_mask</code>가 토글할 때마다 <code>set_selective_softlock_actions</code>를 호출하므로 변경 사항은 즉시 적용됩니다.`],
  [`Center button HOLD mode`, `중앙 버튼 HOLD 모드`],
  [`The Y1 has no hardware hold switch, so HOLD is implemented as a state machine on the center button. The button release that ends a lock or unlock operation is consumed and does not trigger a user interface action. Operation is described under Key lock operation below.`,
   `Y1에는 하드웨어 홀드 스위치가 없으므로, HOLD는 중앙 버튼의 상태 머신으로 구현되어 있습니다. 잠금 또는 해제 동작을 마무리하는 버튼 뗌은 소비되어 사용자 인터페이스 동작을 일으키지 않습니다. 사용 방법은 아래의 키 잠금 동작에 설명되어 있습니다.`],
  [`Speed and pitch screen`, `속도 및 피치 화면`],
  [`Button mapping for CONTEXT_PITCHSCREEN: the click wheel adjusts pitch in fine steps, the volume buttons in coarse steps, Left and Right nudge the value, Center toggles the mode and Menu exits.`,
   `<code>CONTEXT_PITCHSCREEN</code>의 버튼 매핑: 클릭 휠은 피치를 세밀하게, 볼륨 버튼은 크게 조절하고, 왼쪽과 오른쪽은 값을 미세하게 이동하며, 중앙 버튼은 모드를 전환하고 메뉴 버튼은 종료합니다.`],
  [`Settings persistence`, `설정 유지`],
  [`ROCKBOX_NO_TEMP_SETTINGS_FILE causes settings to be written directly to config.cfg. An explicit sync() and the flush mount option commit settings and database updates to the card immediately.`,
   `<code>ROCKBOX_NO_TEMP_SETTINGS_FILE</code>를 사용하면 설정이 <code>config.cfg</code>에 직접 기록됩니다. 명시적인 <code>sync()</code>와 <code>flush</code> 마운트 옵션으로 설정과 데이터베이스 변경 사항이 카드에 즉시 반영됩니다.`],
  [`Plugin execution`, `플러그인 실행`],
  [`Plugins are .rock shared libraries loaded through dlopen() and PROT_EXEC mmap. The card is mounted with fmask=0000,dmask=0000 so that the files have execute permission.`,
   `플러그인은 <code>dlopen()</code>과 <code>PROT_EXEC</code> mmap으로 로드되는 <code>.rock</code> 공유 라이브러리입니다. 파일에 실행 권한이 있도록 카드는 <code>fmask=0000,dmask=0000</code> 옵션으로 마운트됩니다.`],

  /* ---------- Technical: key lock ---------- */
  [`Key lock operation`, `키 잠금 동작`],
  [`Lock`, `잠금`],
  [`Unlock`, `잠금 해제`],
  [`While locked`, `잠금 중`],
  [`Hold the Center button for 5 seconds. The display shows Key lock on. The release is consumed.`,
   `중앙 버튼을 5초 동안 누릅니다. 화면에 <code>Key lock on</code>이 표시됩니다. 버튼을 뗄 때의 입력은 소비됩니다.`],
  [`Hold the Center button for 5 seconds until Click Center to unlock is displayed. Release it, then click Center once within 5 seconds. The display shows Key lock off. The click is consumed.`,
   `<code>Click Center to unlock</code>가 표시될 때까지 중앙 버튼을 5초 동안 누릅니다. 버튼을 뗀 뒤 5초 이내에 중앙 버튼을 한 번 클릭합니다. 화면에 <code>Key lock off</code>가 표시됩니다. 이 클릭은 소비됩니다.`],
  [`Single clicks and holds shorter than 5 seconds display Key lock on and leave the device locked.`,
   `한 번 클릭하거나 5초보다 짧게 누르면 <code>Key lock on</code>이 표시되며 기기는 잠긴 상태로 유지됩니다.`],

  /* ---------- Technical: manual install ---------- */
  [`Manual installation`, `수동 설치`],
  [`The installer tool performs these steps automatically. The manual procedure is provided for reference.`,
   `설치 도구가 이 단계를 자동으로 수행합니다. 수동 절차는 참고용으로 제공됩니다.`],
  [`1. Prepare the microSD card. Format the card as FAT32 or exFAT and extract rockbox_sdcard.zip to the root of the card so that .rockbox is at the top level:`,
   `<strong>1. microSD 카드를 준비합니다.</strong> 카드를 FAT32 또는 exFAT으로 포맷하고, <code>.rockbox</code>가 최상위 위치에 오도록 <code>rockbox_sdcard.zip</code>의 압축을 카드 루트에 풉니다.`],
  [`2. Flash boot_rockbox.img.`, `<strong>2. <code>boot_rockbox.img</code>를 플래시합니다.</strong>`],
  [`Open SP Flash Tool, select Scatter-loading and choose !stock_rom/MT6572_Android_scatter.txt.`,
   `SP Flash Tool을 열고 <strong>Scatter-loading</strong>을 선택한 뒤 <code>!stock_rom/MT6572_Android_scatter.txt</code>를 고릅니다.`],
  [`Deselect all partitions except BOOTIMG.`, `<code>BOOTIMG</code>를 제외한 모든 파티션의 선택을 해제합니다.`],
  [`Set the BOOTIMG location to boot_rockbox.img.`, `<code>BOOTIMG</code> 위치를 <code>boot_rockbox.img</code>로 지정합니다.`],
  [`Click Download.`, `<strong>Download</strong>를 클릭합니다.`],
  [`Power off the Y1 completely and connect it to the computer over USB.`, `Y1의 전원을 완전히 끄고 USB로 컴퓨터에 연결합니다.`],
  [`When "Download OK" is displayed, disconnect the device and power it on.`,
   `"Download OK"가 표시되면 기기의 연결을 해제하고 전원을 켭니다.`],

  /* ---------- Technical: release contents ---------- */
  [`Release contents`, `릴리스 구성`],
  [`Flashable boot image containing the kernel and initramfs. Size: 5,976,064 bytes, leaving 315,392 bytes of headroom in the 6 MB BOOTIMG partition.`,
   `커널과 initramfs를 포함한 플래시용 부트 이미지입니다. 크기는 5,976,064바이트이며, 6 MB <code>BOOTIMG</code> 파티션에 315,392바이트의 여유가 남습니다.`],
  [`The .rockbox directory: codecs (MP3, FLAC, ALAC, AAC, Opus, DSD, WavPack), fonts, themes, and .rock plugins including Doom, Wolf3D, Duke3D, Quake, Rockboy, Chessbox and Sudoku.`,
   `<code>.rockbox</code> 디렉터리: 코덱(MP3, FLAC, ALAC, AAC, Opus, DSD, WavPack), 글꼴, 테마, 그리고 Doom, Wolf3D, Duke3D, Quake, Rockboy, Chessbox, Sudoku를 포함한 <code>.rock</code> 플러그인이 들어 있습니다.`],
  [`Standalone ARMv7 hard-float Rockbox executable launched by /init.`,
   `<code>/init</code>이 실행하는 독립형 ARMv7 하드 플로트 Rockbox 실행 파일입니다.`],
];

/* Page title and search-result description */
const KO_META = {
  title: `Nugget for Y1: 맛있고 안정적인 커스텀 펌웨어`,
  description: `Innioasis Y1용 커스텀 펌웨어. 배터리 수명 2.6배, 더 큰 소리, 모든 오디오 형식, 대용량 메모리 카드 지원.`,
};

/* =========================================================
   Engine. You shouldn't need to edit below this line.
   ========================================================= */

const SKIP = "script, style, pre, .titlebar, .meter-fill";
const norm = (s) => s.replace(/\s+/g, " ").trim();
const dict = new Map(TRANSLATIONS.map(([en, ko]) => [norm(en), ko]));
const originals = new Map();
const metaDesc = document.querySelector('meta[name="description"]');
const englishMeta = { title: document.title, description: metaDesc ? metaDesc.content : "" };
const langBtn = document.getElementById("langBtn");

/* Finds the innermost elements whose full text matches an English entry. */
function findMatches(el, found) {
  if (el.matches(SKIP)) return false;
  let childMatched = false;
  for (const child of el.children) {
    if (findMatches(child, found)) childMatched = true;
  }
  if (childMatched) return true;
  const key = norm(el.textContent);
  if (dict.has(key)) { found.push([el, key]); return true; }
  return false;
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  /* Put the English back first */
  originals.forEach((html, el) => { el.innerHTML = html; });
  originals.clear();
  document.title = englishMeta.title;
  if (metaDesc) metaDesc.content = englishMeta.description;

  if (lang === "ko") {
    const found = [];
    findMatches(document.querySelector(".page"), found);
    for (const [el, key] of found) {
      const hrefs = [...el.querySelectorAll("a")].map((a) => a.getAttribute("href"));
      originals.set(el, el.innerHTML);
      el.innerHTML = dict.get(key);
      el.querySelectorAll("a").forEach((a, i) => { if (hrefs[i]) a.setAttribute("href", hrefs[i]); });
    }
    document.title = KO_META.title;
    if (metaDesc) metaDesc.content = KO_META.description;
    if (location.search.includes("i18n=debug")) reportMissing();
  }

  if (langBtn) {
    langBtn.textContent = lang === "ko" ? "English" : "한국어";
    langBtn.lang = lang === "ko" ? "en" : "ko";
    langBtn.setAttribute("aria-label", lang === "ko" ? "Switch to English" : "한국어로 보기");
  }
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

/* Debug helper: lists English text blocks that have no translation */
function reportMissing() {
  const done = [...originals.keys()];
  document.querySelectorAll(".page p, .page h1, .page h2, .page h3, .page li, .page summary, .page td, .page th, .page .btn").forEach((el) => {
    if (el.closest(SKIP)) return;
    if (done.some((t) => t === el || t.contains(el) || el.contains(t))) return;
    const text = norm(el.textContent);
    if (/[A-Za-z]{3,}/.test(text)) console.info("[i18n] missing:", text);
  });
}

function startLanguage() {
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const fallback = (navigator.language || "").toLowerCase().startsWith("ko") ? "ko" : "en";
  applyLanguage(saved || fallback);
}

if (langBtn) {
  langBtn.addEventListener("click", () => {
    applyLanguage(document.documentElement.lang === "ko" ? "en" : "ko");
  });
}
startLanguage();