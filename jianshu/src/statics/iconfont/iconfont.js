import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1550409358050'); /* IE9 */
    src: url('./iconfont.eot?t=1550409358050#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPIAAsAAAAAB9QAAAN8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqDGIJ5ATYCJAMQCwoABCAFhG0HSBvjBsiOxHR7gzzCJMkXEXy/32/Pfefb/YgnSardp5skEolQKAlSJDRKJSQvgSM29YAqpOp0JjX1yEOJwchPXPx/LqfXsgTmtyyXW5Maa9ANP+oFGAcU0N7YBgm4QALzluG1i+kgTxOoZnVCnGTklYGVhCcF4knglWCV8coGdegK7YqVCfEK5rplJHkGwEvw/fiDkLACRasBPPP0MV0DSZ/OzyKoAf8HQJ2HADldGMo6GqwBSTxURu9RUXUNpVqHmdkA2lIony7PIv7/Z0o88LJNcvt/vEYh2oCVA2APag2fzsxN8OlCVIkRoFDgY0hdkD0Db4Ct0x5VpDKlsLJyYezce3L7rxPXrlVcuVJ29Wr56OuJaOro1QN7Xb9emcZK7nLtmh1doSijdUx1zTRfeo57lXI3MxqgBn2AHnWOGFhZOTDYIa58ywoYsJIZfZggKiv5wMqB0KNi2hQom9CUz2jl3WHJKU/X2llevFvl7NXbt7Yu33m1U2yTpa1tfTsxkZx8+PBkiqCA8V0nHT4ymUyU2l+1tZ3pGeoZ/vAbNWT9+iGIpSBCDiETzEfhveAAl3mxXdpFZPtflXpNm1BYTqaohITrZr8TTPhoVCBhnhwgtq8QbOqZ3KSYJw2V+LSHy2/P1h9b+8JfxTyJ3D86rIYgiREFYB/Ro508nt8fuTn79uwu27x7u7kzrps9X2SH1iz8ru3qMTw/w6UgHSSA/4PUASo5MPw3QH0gVU31/Xm/cXUxy7bRLu6rFWMG8DG+/zhI/w80g25x0L2nWPCryI5NadPYl2kyjHBiaSs1SkFV8Yu0MObeFNJkZyWhazKBomMGGl1zhrSsQUvfHrR17UO1KnN93zgZJdIaWDEUQRixHooh79AYcdaQlrvQMuUttI0EBdV1OO3YtxACnSojJUYaVtWTFdSikaMBTIfqEsR31SvlNB3YKpBsEgpscEBQvpGJjEieYo6pGx+CMcdysmhgM9B5SK8XWUkWtUiNA5oxlmICA7mqFwWoRQPQjskQJQzRYKn0xBKoiYw4rz1GFz5fAuF1packN+hanhUQmYnQPStYgKAOhkzB2El3K5eYdMMLgWEcFkcmMmBloDCiJ1URS6oepoWoYQGaB5QlMQKFVlxXIWB5yfCGO6DCu2SQBEWYEeZQH5VGXqPUCl6GTFYqHmFAZ3UzUusEIwA=') format('woff2'),
    url('./iconfont.woff?t=1550409358050') format('woff'),
    url('./iconfont.ttf?t=1550409358050') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1550409358050#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`