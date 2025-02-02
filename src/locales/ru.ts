export default {
  message: "Добро пожаловать",
  success: "успех",
  failed: "ошибка",
  enable: "Включить",
  disable: "Отключить",
  none: "Никакие",
  all: "Все",
  filter: "Фильтр",
  loading: "Загрузка...",
  confirm: "Вы уверены?",
  yes: "да",
  no: "нет",
  unlimited: "бесконечный",
  remained: "Осталось",
  type: "Тип",
  protocol: "Протокол",
  submit: "Отправить",
  reset: "Сбросить",
  now: "Сейчас",
  network: "Сеть",
  copyToClipboard: "Копировать в буфер обмена",
  noData: "Нет данных!",
  invalidLogin: "Неверный логин!",
  online: "В сети",
  version: "Версия",
  email: "Электронная почта",
  commaSeparated: "(разделено запятыми)",
  count: "Количество",
  template: "Шаблон",
  error: {
    dplData: "Дублирующие данные",
    core: "Ошибка Sing-Box",
  },
  pages: {
    login: "Вход",
    home: "Главная",
    inbounds: "Входящие",
    outbounds: "Исходящие",
    endpoints: "Эндпоинты",
    clients: "Клиенты",
    rules: "Правила",
    tls: "Настройки TLS",
    basics: "Основы",
    admins: "Администраторы",
    settings: "Настройки",
  },
  main: {
    tiles: "Плитки",
    gauges: "Датчики",
    charts: "Графики",
    infos: "Информация",
    gauge: {
      cpu: "Загрузка ЦП",
      mem: "Загрузка ОЗУ",
    },
    chart: {
      cpu: "Мониторинг ЦП",
      mem: "Мониторинг ОЗУ",
      net: "Сетевой трафик",
      pnet: "Сетевые пакеты",
    },
    info: {
      sys: "Информация о системе",
      sbd: "Информация о Sing-Box",
      host: "Хост",
      cpu: "ЦП",
      core: "Ядро",
      uptime: "Время работы",
      threads: "Потоки",
      memory: "Память",
      running: "Работает"
    },
    backup: {
      title: "Резервное копирование и восстановление",
      backup: "Скачать резервную копию",
      restore: "Восстановить",
      exclStats: "Исключить графики",
      exclChanges: "Исключить изменения",
    }
  },
  objects: {
    inbound: "Входящий",
    client: "Клиент",
    outbound: "Исходящий",
    endpoint: "Точка входа",
    config: "Настройки",
    rule: "Правило",
    user: "Пользователь",
    tag: "Тег",
    listen: "Прослушивание",
    dial: "Звонок",
    tls: "TLS",
    multiplex: "Мультиплекс",
    transport: "Транспорт",
    headers: "Заголовки",
    key: "Ключ",
    value: "Значение",
  },
  actions: {
    action: "Действие",
    add: "Добавить",
    addbulk: "Добавить пакетно",
    new: "Новый",
    edit: "Редактировать",
    del: "Удалить",
    clone: "Клонировать",
    save: "Сохранить",
    update: "Обновить",
    submit: "Отправить",
    set: "Установить",
    generate: "Генерировать",
    disable: "Отключить",
    close: "Закрыть",
    restartApp: "Перезапустить приложение",
    restartSb: "Перезапустить Singbox",
  },
  login: {
    title: "Вход",
    username: "Имя пользователя",
    unRules: "Имя пользователя не может быть пустым",
    password: "Пароль",
    pwRules: "Пароль не может быть пустым",
  },
  menu: {
    logout: "Выйти",
  },
  admin: {
    changeCred: "Изменить учетные данные",
    oldPass: "Текущий пароль",
    newUname: "Новое имя пользователя",
    newPass: "Новый пароль",
    lastLogin: "Последний вход",
    date: "Дата",
    time: "Время",
    changes: "Изменения",
    actor: "Исполнитель",
    key: "Ключ",
    action: "Действие",
    api: {
      title: "Токены API",
      msg: "Пожалуйста, скопируйте токен ниже и сохраните его в безопасном месте. Он не будет показан заново.",
      token: "Токен",
    },
  },
  setting: {
    interface: "Интерфейс",
    sub: "Подписка",
    addr: "Адрес",
    port: "Порт",
    webPath: "Базовый URI",
    domain: "Домен",
    sslKey: "Путь к SSL ключу",
    sslCert: "Путь к SSL сертификату",
    webUri: "URI панели",
    sessionAge: "Максимальная длительность сессии",
    trafficAge: "Максимальная длительность трафика",
    timeLoc: "Часовой пояс",
    subEncode: "Включить кодирование",
    subInfo: "Включить информацию о клиенте",
    path: "Путь по умолчанию",
    update: "Время автоматического обновления",
    subUri: "URI подписки",
    jsonSub: "JSON подписка",
    toDirect: "Маршрутизация на Direct",
    toBlock: "Маршрутизация на Block",
    timestamp: "Метка времени",
    globalDns: "Глобальный DNS",
    directDns: "Прямой DNS",
    toDirectDns: "Маршрутизация на Direct DNS",
    jsonSubOptions: "Другие параметры",
    excludePkg: "Исключить пакеты",
  },
  client: {
    name: "Имя",
    desc: "Описание",
    group: "Группа",
    inboundTags: "Теги входящих",
    basics: "Основы",
    config: "Конфигурация",
    links: "Ссылки",
    external: "Внешняя ссылка",
    sub: "Внешняя подписка",
  },
  bulk: {
    order: "Порядок",
    random: "Случайный",
  },
  types: {
    un: "Имя пользователя",
    pw: "Пароль",
    direct: {
      overrideAddr: "Переопределить адрес",
      overridePort: "Переопределить порт",
    },
    hy: {
      obfs: "Обфусцированный пароль",
      auth: "Пароль аутентификации",
      hyOptions: "Параметры Hysteria",
      hy2Options: "Параметры Hysteria2",
      ignoreBw: "Игнорировать пропускную способность клиента",
    },
    shdwTls: {
      hs: "Сервер рукопожатий",
      addHS: "Добавить сервер рукопожатий",
    },
    ssh: {
      passphrase: "Парольная фраза",
      hostKey: "Ключи хоста",
      algorithm: "Алгоритмы ключей",
      clientVer: "Версия клиента",
      options: "Параметры SSH",
    },
    tor: {
      execPath: "Путь к исполняемому файлу",
      dataDir: "Каталог данных",
      extArgs: "Дополнительные аргументы",
    },
    tuic: {
      congControl: "Контроль перегрузок",
      authTimeout: "Таймаут аутентификации",
      hb: "Сердцебиение",
    },
    tun: {
      addr: "Адреса",
      ifName: "Имя интерфейса",
    },
    vless: {
      flow: "Поток",
      udpEnc: "Кодирование UDP пакетов",
    },
    vmess: {
      security: "Безопасность",
      globalPadding: "Глобальная подкладка",
      authLen: "Длина шифрования",
    },
    wg: {
      privKey: "Приватный ключ",
      pubKey: "Публичный ключ пира",
      psk: "Предварительно разделенный ключ",
      localIp: "Локальные IP",
      worker: "Работники",
      ifName: "Имя интерфейса",
      sysIf: "Системный интерфейс",
      options: "Параметры Wireguard",
      multiPeer: "Множественный пир",
      allowedIp: "Разрешенные IP",
      peer: "Пир",
      peers: "Пиры",
    },
    lb: {
      defaultOut: "Исходящий по умолчанию",
      interruptConn: "Прервать существующие соединения",
      testUrl: "Тестовый URL",
      interval: "Интервал",
      tolerance: "Толерантность",
      urlTestOptions: "Параметры теста URL"
    }
  },
  in: {
    addr: "Адрес",
    port: "Порт",
    clients: "Включить клиентов",
    ssMethod: "Метод",
    sSide: "Сторона сервера",
    cSide: "Сторона клиента",
    multiDomain: "Мультидомен",
    remark: "Примечание",
    mdOption: "Параметры мультидомена",
  },
  listen: {
    options: "Параметры прослушивания",
    tcpOptions: "Параметры TCP",
    udpOptions: "Параметры UDP",
    detour: "Обход",
    detourText: "Переадресация на входящий",
    domainStrategy: "Стратегия домена",
  },
  dial: {
    bindIf: "Привязка к сетевому интерфейсу",
    bindIp4: "Привязка к IPv4",
    bindIp6: "Привязка к IPv6",
    reuseAddr: "Повторное использование адреса слушателя",
    connTimeout: "Таймаут подключения",
    fbTimeout: "Таймаут возврата",
    options: "Параметры вызова",
    detourText: "Переадресация на исходящий",
  },
  transport: {
    enable: "Включить транспорт",
    host: "Хост",
    hosts: "Хосты",
    path: "Путь",
    httpMethod: "Метод запроса",
    idleTimeout: "Таймаут бездействия",
    pingTimeout: "Таймаут пинга",
    grpcServiceName: "Имя службы",
    grpcPws: "Разрешить без потока",
  },
  mux: {
    enable: "Включить мультиплекс",
    maxConn: "Максимальное количество соединений",
    minStr: "Минимальное количество потоков",
    maxStr: "Максимальное количество потоков",
    padding: "Только подкладка",
    enableBrutal: "Включить Brutal",
  },
  out: {
    addr: "Адрес сервера",
    port: "Порт сервера",
  },
  rule: {
    add: "Добавить правило",
    simple: "Простое",
    logical: "Логическое",
    mode: "Режим",
    invert: "Инвертировать",
    ipVer: "Версия IP",
    domain: "Домены",
    domainSufix: "Суффиксы доменов",
    domainKw: "Ключевые слова домена",
    domainRgx: "Регулярные выражения домена",
    ip: "CIDR IP",
    privateIp: "Недействительные диапазоны IP",
    port: "Порты",
    portRange: "Диапазоны портов",
    srcCidr: "CIDR исходного IP",
    srcPrivateIp: "Недействительные исходные IP",
    srcPort: "Исходные порты",
    srcPortRange: "Диапазоны исходных портов",
    ruleset: "Наборы правил",
    rulesetMatchSrc: "Набор правил для соответствия источника IPcidr",
    options: "Параметры правила",
    domainRules: "Домен/IP",
    srcIpRules: "Источник IP",
    srcPortRules: "Источник порта",
    udpDisableDomainUnmapping: "Отключить перенос доменных имен",
    udpConnect: "Подключение UDP",
    udpTimeout: "Таймаут UDP",
    method: "Метод",
    noDrop: "Не сбрасывать",
    sniffer: "Обнаружение",
    timeout: "Таймаут",
    strategy: "Стратегия",
  },
  ruleset: {
    add: "Добавить набор правил",
    format: "Формат данных",
    interval: "Интервалы обновления",
    remote: "Удаленный",
    local: "Локальный",
  },
  basic: {
    log: {
      title: "Журналы",
      level: "Уровень",
      output: "Вывод",
      timestamp: "Включить метку времени",
    },
    dns: {
      final: "Итоговый",
      server: "Сервер",
      firstServer: "Первый сервер",
      addrResolver: "Разрешение адреса",
    },
    routing: {
      title: "Маршрутизация",
      defaultOut: "Исходящий по умолчанию",
      defaultIf: "Сетевой интерфейс по умолчанию",
      defaultRm: "Маршрут по умолчанию",
      autoBind: "Автопривязка сетевого интерфейса",
    },
    exp: {
      storeFakeIp: "Хранить поддельный IP",
    },
  },
  tls: {
    enable: "Включить TLS",
    usePath: "Использовать путь",
    useText: "Использовать текст",
    certPath: "Путь к файлу сертификата",
    keyPath: "Путь к файлу ключа",
    cert: "Сертификат",
    key: "Ключ",
    options: "Параметры TLS",
    minVer: "Минимальная версия",
    maxVer: "Максимальная версия",
    cs: "Наборы шифров",
    privKey: "Приватный ключ",
    pubKey: "Публичный ключ",
    disableSni: "Отключить SNI",
    insecure: "Разрешить небезопасное",
    acme: {
      options: "Параметры ACME",
      dataDir: "Каталог данных",
      defaultDomain: "Домен по умолчанию",
      disableChallenges: "Отключить вызовы",
      httpChallenge: "Отключить HTTP вызов",
      tlsChallenge: "Отключить TLS вызов",
      altPorts: "Альтернативные порты",
      altHport: "Альтернативный HTTP порт",
      altTport: "Альтернативный TLS порт",
      caProvider: "Поставщик CA",
      customCa: "Пользовательский поставщик CA",
      extAcc: "Внешний аккаунт",
      dns01: "DNS01 вызов",
      dns01Provider: "Поставщик DNS01 вызова",
    },
  },
  stats: {
    upload: "Загрузка",
    download: "Скачивание",
    volume: "Объем",
    usage: "Использование",
    graphTitle: "График трафика",
    B: "Б",
    KB: "КБ",
    MB: "МБ",
    GB: "ГБ",
    TB: "ТБ",
    PB: "ПБ",
    p: "п",
    Kp: "Кп",
    Mp: "Мп",
    Gb: "Гб",
    bps: "б/с",
    Kbps: "Кб/с",
    Mbps: "Мб/с",
  },
  date: {
    expiry: "Срок действия",
    expired: "Истек",
    d: "д",
    h: "ч",
    m: "м",
    s: "с",
    ms: "мс",
  },
}
