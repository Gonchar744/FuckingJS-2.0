            c = new Array();
            n = new Array();
            c[0] = 1;
            n[0] = "USD";
            c[1] = 0.75;
            n[1] = "EUR";
            c[2] = 63.01;
            n[2] = "RUB";
            c[3] = 6.58;
            n[3] = "PLN";
            c[4] = 27.30;
            n[4] = "UAH";
            c[5] = 33.80;
            n[5] = "GBR";
            c[6] = 0.00014466;
            n[6] = "BTC";
            c[7] = 0.0062543;
            n[7] = "ETH";
            c[8] = 5.23560209;
            n[8] = "XRP";
            c[9] = 0.99800399;
            n[9] = "USDT";
     
            function GiveResult()
            {
                let res, vfrom, vto, vcash;
                vcash = document.getElementById("cash").value;
                vfrom = document.getElementById("from").value;
                vcash = vcash.replace(',', '\.');
                vcash = vcash.replace(' ', '');
                vcash = vcash.replace(' ', '');
                vto = document.getElementById("to").value;
                res = c[vto] * vcash / c[vfrom], 2;
 
                res = res.toFixed(2);
                res = res.toString();
                res = res.replace('\.', ',');
                res = "<span class='result'> Результат конвертації: " + res + "</span>&nbsp;" + n[vto];
            
                document.getElementById("result").innerHTML = res;
            }