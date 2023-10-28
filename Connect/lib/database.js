const _0x52826e = _0x530e;
function _0x5703() {
    const _0x29fb07 = [
        'prototype',
        'bind',
        '6155664drodAv',
        '_jsonargs',
        'save',
        '5OSvPHo',
        '{}.constructor(\x22return\x20this\x22)(\x20)',
        'length',
        'console',
        'mkdir',
        'file',
        '99eOLBIB',
        'log',
        '705066tHMsbW',
        '_state',
        '8bwRmuh',
        'catch',
        'path',
        'table',
        'apply',
        'error',
        'return\x20(function()\x20',
        '2kNhVtI',
        'exception',
        'toString',
        '_queue',
        '_save',
        'load',
        'existsSync',
        '__proto__',
        'info',
        '654968CQdwWk',
        'readFileSync',
        '977820fkQqfW',
        '457576CYAPdE',
        '_load',
        'push',
        'logger',
        '32770826VbPMbA',
        '_data',
        '7649726DZOXts',
        'parse'
    ];
    _0x5703 = function () {
        return _0x29fb07;
    };
    return _0x5703();
}
(function (_0x1d8aae, _0x1cb5b5) {
    const _0x373192 = _0x530e, _0xdf2169 = _0x1d8aae();
    while (!![]) {
        try {
            const _0x488daa = parseInt(_0x373192(0x9a)) / 0x1 + -parseInt(_0x373192(0xb8)) / 0x2 * (-parseInt(_0x373192(0xaf)) / 0x3) + -parseInt(_0x373192(0x97)) / 0x4 * (-parseInt(_0x373192(0xa7)) / 0x5) + -parseInt(_0x373192(0xa4)) / 0x6 + -parseInt(_0x373192(0xa0)) / 0x7 * (parseInt(_0x373192(0xb1)) / 0x8) + -parseInt(_0x373192(0xad)) / 0x9 * (parseInt(_0x373192(0x99)) / 0xa) + parseInt(_0x373192(0x9e)) / 0xb;
            if (_0x488daa === _0x1cb5b5)
                break;
            else
                _0xdf2169['push'](_0xdf2169['shift']());
        } catch (_0x12d4a4) {
            _0xdf2169['push'](_0xdf2169['shift']());
        }
    }
}(_0x5703, 0x9c876));
const _0x33d726 = (function () {
        let _0x3c62c9 = !![];
        return function (_0xd3d23a, _0x3dca13) {
            const _0x1bca02 = _0x3c62c9 ? function () {
                const _0x5c472f = _0x530e;
                if (_0x3dca13) {
                    const _0x47dadb = _0x3dca13[_0x5c472f(0xb5)](_0xd3d23a, arguments);
                    return _0x3dca13 = null, _0x47dadb;
                }
            } : function () {
            };
            return _0x3c62c9 = ![], _0x1bca02;
        };
    }()), _0x2a2017 = _0x33d726(this, function () {
        const _0x1cafcc = _0x530e, _0x3a4301 = function () {
                const _0x53e311 = _0x530e;
                let _0x32e1b6;
                try {
                    _0x32e1b6 = Function(_0x53e311(0xb7) + _0x53e311(0xa8) + ');')();
                } catch (_0x5e7173) {
                    _0x32e1b6 = window;
                }
                return _0x32e1b6;
            }, _0x43d732 = _0x3a4301(), _0x11be37 = _0x43d732[_0x1cafcc(0xaa)] = _0x43d732[_0x1cafcc(0xaa)] || {}, _0x2fb805 = [
                _0x1cafcc(0xae),
                'warn',
                _0x1cafcc(0x96),
                _0x1cafcc(0xb6),
                _0x1cafcc(0x8f),
                _0x1cafcc(0xb4),
                'trace'
            ];
        for (let _0x563574 = 0x0; _0x563574 < _0x2fb805[_0x1cafcc(0xa9)]; _0x563574++) {
            const _0x5bdb6a = _0x33d726['constructor'][_0x1cafcc(0xa2)][_0x1cafcc(0xa3)](_0x33d726), _0x4364a0 = _0x2fb805[_0x563574], _0x310b02 = _0x11be37[_0x4364a0] || _0x5bdb6a;
            _0x5bdb6a[_0x1cafcc(0x95)] = _0x33d726[_0x1cafcc(0xa3)](_0x33d726), _0x5bdb6a[_0x1cafcc(0x90)] = _0x310b02['toString']['bind'](_0x310b02), _0x11be37[_0x4364a0] = _0x5bdb6a;
        }
    });
_0x2a2017();
function _0x530e(_0x4c9d42, _0x5767fe) {
    const _0x1f4ebb = _0x5703();
    return _0x530e = function (_0x2a2017, _0x33d726) {
        _0x2a2017 = _0x2a2017 - 0x8f;
        let _0x5d8151 = _0x1f4ebb[_0x2a2017];
        return _0x5d8151;
    }, _0x530e(_0x4c9d42, _0x5767fe);
}
const path = require(_0x52826e(0xb3)), _fs = require('fs'), {promises: fs} = _fs;
class Database {
    constructor(_0x3c58d9, ..._0x265a69) {
        const _0x2acb3c = _0x52826e;
        this['file'] = path['resolve'](_0x3c58d9), this[_0x2acb3c(0x9d)] = console, this[_0x2acb3c(0x9b)](), this['_jsonargs'] = _0x265a69, this[_0x2acb3c(0xb0)] = ![], this[_0x2acb3c(0x91)] = [], this['_interval'] = setInterval(async () => {
            const _0x67a892 = _0x2acb3c;
            !this[_0x67a892(0xb0)] && this['_queue'] && this[_0x67a892(0x91)][0x0] && (this['_state'] = !![], await this[this[_0x67a892(0x91)]['shift']()]()[_0x67a892(0xb2)](this[_0x67a892(0x9d)][_0x67a892(0xb6)]), this[_0x67a892(0xb0)] = ![]);
        }, 0x3e8);
    }
    get ['data']() {
        const _0x830b3f = _0x52826e;
        return this[_0x830b3f(0x9f)];
    }
    set ['data'](_0x152524) {
        const _0x459114 = _0x52826e;
        this[_0x459114(0x9f)] = _0x152524, this[_0x459114(0xa6)]();
    }
    [_0x52826e(0x93)]() {
        const _0xfd3a7a = _0x52826e;
        this[_0xfd3a7a(0x91)][_0xfd3a7a(0x9c)](_0xfd3a7a(0x9b));
    }
    [_0x52826e(0xa6)]() {
        const _0x2325ca = _0x52826e;
        this[_0x2325ca(0x91)][_0x2325ca(0x9c)](_0x2325ca(0x92));
    }
    ['_load']() {
        const _0xd02f78 = _0x52826e;
        try {
            return this['_data'] = _fs['existsSync'](this[_0xd02f78(0xac)]) ? JSON[_0xd02f78(0xa1)](_fs[_0xd02f78(0x98)](this[_0xd02f78(0xac)])) : {};
        } catch (_0x4755f5) {
            return this[_0xd02f78(0x9d)][_0xd02f78(0xb6)](_0x4755f5), this[_0xd02f78(0x9f)] = {};
        }
    }
    async [_0x52826e(0x92)]() {
        const _0x15d6e4 = _0x52826e;
        let _0x140d12 = path['dirname'](this['file']);
        if (!_fs[_0x15d6e4(0x94)](_0x140d12))
            await fs[_0x15d6e4(0xab)](_0x140d12, { 'recursive': !![] });
        return await fs['writeFile'](this[_0x15d6e4(0xac)], JSON['stringify'](this[_0x15d6e4(0x9f)], ...this[_0x15d6e4(0xa5)])), this['file'];
    }
}
module['exports'] = Database;
