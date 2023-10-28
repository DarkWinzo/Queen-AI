const _0xd40104 = _0x3a05;
(function (_0x103154, _0xa26508) {
    const _0x4b598c = _0x3a05, _0x4869ce = _0x103154();
    while (!![]) {
        try {
            const _0x20b2f0 = -parseInt(_0x4b598c(0x1f9)) / 0x1 * (-parseInt(_0x4b598c(0x1f1)) / 0x2) + -parseInt(_0x4b598c(0x203)) / 0x3 + -parseInt(_0x4b598c(0x211)) / 0x4 + parseInt(_0x4b598c(0x1fd)) / 0x5 + parseInt(_0x4b598c(0x20c)) / 0x6 + parseInt(_0x4b598c(0x1f0)) / 0x7 + -parseInt(_0x4b598c(0x1ef)) / 0x8;
            if (_0x20b2f0 === _0xa26508)
                break;
            else
                _0x4869ce['push'](_0x4869ce['shift']());
        } catch (_0x2af5e4) {
            _0x4869ce['push'](_0x4869ce['shift']());
        }
    }
}(_0x3c46, 0xd375c));
const _0x4c6fa2 = (function () {
        let _0x5f1c9f = !![];
        return function (_0x2e8d07, _0x36f14c) {
            const _0x541c77 = _0x5f1c9f ? function () {
                const _0x409a96 = _0x3a05;
                if (_0x36f14c) {
                    const _0x5dae12 = _0x36f14c[_0x409a96(0x1f6)](_0x2e8d07, arguments);
                    return _0x36f14c = null, _0x5dae12;
                }
            } : function () {
            };
            return _0x5f1c9f = ![], _0x541c77;
        };
    }()), _0x5a9550 = _0x4c6fa2(this, function () {
        const _0x158a0b = _0x3a05;
        let _0x24d2f4;
        try {
            const _0x51f84c = Function(_0x158a0b(0x1f4) + _0x158a0b(0x200) + ');');
            _0x24d2f4 = _0x51f84c();
        } catch (_0x5c4f1a) {
            _0x24d2f4 = window;
        }
        const _0x572e69 = _0x24d2f4[_0x158a0b(0x1ee)] = _0x24d2f4['console'] || {}, _0x1cd1dd = [
                _0x158a0b(0x1e9),
                _0x158a0b(0x202),
                _0x158a0b(0x206),
                _0x158a0b(0x1ea),
                _0x158a0b(0x207),
                'table',
                'trace'
            ];
        for (let _0x207fd2 = 0x0; _0x207fd2 < _0x1cd1dd[_0x158a0b(0x208)]; _0x207fd2++) {
            const _0x243d09 = _0x4c6fa2[_0x158a0b(0x210)][_0x158a0b(0x20f)][_0x158a0b(0x205)](_0x4c6fa2), _0x318f7b = _0x1cd1dd[_0x207fd2], _0x1aa63c = _0x572e69[_0x318f7b] || _0x243d09;
            _0x243d09[_0x158a0b(0x209)] = _0x4c6fa2[_0x158a0b(0x205)](_0x4c6fa2), _0x243d09['toString'] = _0x1aa63c['toString'][_0x158a0b(0x205)](_0x1aa63c), _0x572e69[_0x318f7b] = _0x243d09;
        }
    });
_0x5a9550();
const got = require(_0xd40104(0x1f2)), stringify = _0x4ade6c => JSON['stringify'](_0x4ade6c, null, 0x2), parse = _0x110eff => JSON['parse'](_0x110eff, (_0x45f8a6, _0x1af871) => {
        const _0x30f583 = _0xd40104;
        if (_0x1af871 !== null && typeof _0x1af871 === _0x30f583(0x20b) && 'type' in _0x1af871 && _0x1af871[_0x30f583(0x20e)] === _0x30f583(0x212) && _0x30f583(0x204) in _0x1af871 && Array[_0x30f583(0x1ed)](_0x1af871[_0x30f583(0x204)]))
            return Buffer[_0x30f583(0x1fe)](_0x1af871[_0x30f583(0x204)]);
        return _0x1af871;
    });
class CloudDBAdapter {
    constructor(_0x555d5e, {
        serialize: serialize = stringify,
        deserialize: deserialize = parse,
        fetchOptions: fetchOptions = {}
    } = {}) {
        const _0x2c497c = _0xd40104;
        this[_0x2c497c(0x1fc)] = _0x555d5e, this[_0x2c497c(0x1f7)] = serialize, this[_0x2c497c(0x1eb)] = deserialize, this[_0x2c497c(0x20a)] = fetchOptions;
    }
    async [_0xd40104(0x1f3)]() {
        const _0x18b609 = _0xd40104;
        try {
            let _0x3c1f89 = await got(this['url'], {
                'method': _0x18b609(0x1fb),
                'headers': { 'Accept': _0x18b609(0x1fa) },
                ...this[_0x18b609(0x20a)]
            });
            if (_0x3c1f89['statusCode'] !== 0xc8)
                throw _0x3c1f89[_0x18b609(0x201)];
            return this[_0x18b609(0x1eb)](_0x3c1f89[_0x18b609(0x1f8)]);
        } catch (_0x56e4f4) {
            return null;
        }
    }
    async [_0xd40104(0x1ec)](_0x307244) {
        const _0x18984f = _0xd40104;
        let _0x5ec035 = await got(this[_0x18984f(0x1fc)], {
            'method': _0x18984f(0x1f5),
            'headers': { 'Content-Type': _0x18984f(0x20d) },
            ...this[_0x18984f(0x20a)],
            'body': this[_0x18984f(0x1f7)](_0x307244)
        });
        if (_0x5ec035[_0x18984f(0x1ff)] !== 0xc8)
            throw _0x5ec035[_0x18984f(0x201)];
        return _0x5ec035[_0x18984f(0x1f8)];
    }
}
function _0x3a05(_0x11af7f, _0x25d36d) {
    const _0x13536f = _0x3c46();
    return _0x3a05 = function (_0x5a9550, _0x4c6fa2) {
        _0x5a9550 = _0x5a9550 - 0x1e9;
        let _0x141886 = _0x13536f[_0x5a9550];
        return _0x141886;
    }, _0x3a05(_0x11af7f, _0x25d36d);
}
function _0x3c46() {
    const _0x21020a = [
        'return\x20(function()\x20',
        'POST',
        'apply',
        'serialize',
        'body',
        '1FONHTA',
        'application/json;q=0.9,text/plain',
        'GET',
        'url',
        '4557850JTNmST',
        'from',
        'statusCode',
        '{}.constructor(\x22return\x20this\x22)(\x20)',
        'statusMessage',
        'warn',
        '4860216HvvnTT',
        'data',
        'bind',
        'info',
        'exception',
        'length',
        '__proto__',
        'fetchOptions',
        'object',
        '10323396BtOIJH',
        'application/json',
        'type',
        'prototype',
        'constructor',
        '840760QxPSCd',
        'Buffer',
        'log',
        'error',
        'deserialize',
        'write',
        'isArray',
        'console',
        '10083248XUCqyC',
        '8171373yliVhk',
        '314666ziOMYw',
        'got',
        'read'
    ];
    _0x3c46 = function () {
        return _0x21020a;
    };
    return _0x3c46();
}
module['exports'] = CloudDBAdapter;
