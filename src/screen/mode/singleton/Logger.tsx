import RNFS from "react-native-fs";
import Page from "../../../base/Page";

const moment = require("moment");

// key for current project
const LOG_KEY = "logger_for_ts_research_project";
const logFilePath = RNFS.ExternalDirectoryPath + "/logs.txt"; // "/storage/emulated/0/Android/data/{project.name}/files/logs.txt"

export default class Logger<T extends Page> {
    public static instance;
    private class: T;
    public static getInstance<T extends Page>(args: T): Logger<T> {
        if (this.instance == null) {
            this.instance = new Logger<T>(args);
        }
        return this.instance;
    }
    public constructor(args: T) {
        this.class = args;
    }
    public info(msg) {
        console.log("info----" + msg + "----" + this.getClassName());
        this.writeLog(msg + "from " + this.getClassName(), "info");
    }
    public warn(msg) {
        console.warn("warn----" + msg + "----" + this.getClassName());
        this.writeLog(msg + "from " + this.getClassName(), "warn");
    }
    public error(msg) {
        console.error("error----" + msg + "----" + this.getClassName());
        this.writeLog(msg + "from " + this.getClassName(), "error");
    }
    private getClassName() {
        return this.class.getClassName();
    }
    private writeLog(info, type: "info" | "warn" | "error") {
        RNFS.exists(logFilePath).then(exists => {
            if (!exists) { // 不存在getDateTime日志文件，则创建文件
              RNFS.writeFile(logFilePath, moment().format("【YYYY-MM-DD HH:mm:ss】 -- " + "创建日志文件;\n"));
            }
            RNFS.stat(logFilePath).then(result => {
              const message = moment().format("【YYYY-MM-DD HH:mm:ss】 -- ") + type + " " + info + ";\n";
              if (result.size < 1024 * 1024 * 10) {
                RNFS.appendFile(logFilePath, message);
              } else { // 如果日志文件大于10Mß
                RNFS.writeFile(logFilePath, moment().format("【YYYY-MM-DD HH:mm:ss】 -- " + "日志文件大小超过10Mb，清空之前的记录！;\n"));
              }
            });
          });
    }
}

// 懒汉式单例模式 线程不安全
/**
 * 是否 Lazy 初始化：是；
 * 是否多线程安全：否；
 * 实现难度：易；
 * 描述：这种方式是最基本的实现方式，这种实现最大的问题就是不支持多线程。因为没有加锁 synchronized，所以严格意义上它并不算单例模式。这种方式 lazy loading 很明显，不要求线程安全，在多线程不能正常工作。
 */
// public class Logger {
//     private static Logger instance;
//     private Logger (){}

//     public static Logger getInstance() {
//     if (instance == null) {
//         instance = new Logger();
//     }
//     return instance;
//     }
// }

// 懒汉式单例模式 线程安全
/**
 * 是否 Lazy 初始化：是；
 * 是否多线程安全：是；
 * 实现难度：易；
 * 描述：这种方式具备很好的 lazy loading，能够在多线程中很好的工作，但是，效率很低，99% 情况下不需要同步。
 * 优点：第一次调用才初始化，避免内存浪费。
 * 缺点：必须加锁 synchronized 才能保证单例，但加锁会影响效率。
 * getInstance() 的性能对应用程序不是很关键（该方法使用不太频繁）
 */
// public class Logger {
//     private static Logger instance;
//     private Logger (){}
//     public static synchronized Logger getInstance() {
//     if (instance == null) {
//         instance = new Logger();
//     }
//     return instance;
//     }
// }

// 饿汉式单例模式
/**
 * 是否 Lazy 初始化：否；
 * 是否多线程安全：是；
 * 实现难度：易；
 * 描述：这种方式比较常用，但容易产生垃圾对象。
 * 优点：没有加锁，执行效率会提高。
 * 缺点：类加载时就初始化，浪费内存。
 * 它基于 classloader 机制避免了多线程的同步问题，不过，instance 在类装载时就实例化，虽然导致类装载的原因有很多种，在单例模式中大多数都是调用 getInstance 方法， 但是也不能确定有其他的方式（或者其他的静态方法）导致类装载，这时候初始化 instance 显然没有达到 lazy loading 的效果。
 */
// public class Logger {
//     private static Logger instance = new Logger();
//     private Logger (){}
//     public static Logger getInstance() {
//     return instance;
//     }
// }

// 双检锁/双重校验锁（DCL，即 double-checked locking）
/**
 * JDK 版本：JDK1.5 起
 * 是否 Lazy 初始化：是
 * 是否多线程安全：是
 * 实现难度：较复杂
 * 描述：这种方式采用双锁机制，安全且在多线程情况下能保持高性能
 * getInstance() 的性能对应用程序很关键。
 */
// public class Logger {
//     private volatile static Logger singleton;
//     private Logger() { }
//     public static Logger getSingleton() {
//         if (singleton == null) {
//             synchronized(Logger.class) {
//                 if (singleton == null) {
//                     singleton = new Logger();
//                 }
//             }
//         }
//         return singleton;
//     }
// }

// 登记式/静态内部类
// public class Logger {
//     private static class LoggerHolder {
//     private static final Logger INSTANCE = new Logger();
//     }
//     private Logger (){}
//     public static final Logger getInstance() {
//     return LoggerHolder.INSTANCE;
//     }
// }
