<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd8e03b15b0cb6cc2add24ff8fb351a8c
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Miguel\\LanzaroteLan\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Miguel\\LanzaroteLan\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd8e03b15b0cb6cc2add24ff8fb351a8c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd8e03b15b0cb6cc2add24ff8fb351a8c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd8e03b15b0cb6cc2add24ff8fb351a8c::$classMap;

        }, null, ClassLoader::class);
    }
}
