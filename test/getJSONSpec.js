require('jasmine-ajax');
var getJSON = require ('../src/js/getJSON');

var response = {
  response: {
    success: {
      status: 200,
      responseText: '{"responseText":{"title":"Bank HMDA filings","bank":"Bank Name","description":"Bank data","layout":"bank-data","categories":"chart","data":{"years":[{"year":"1990","count":9333,"loan_amount":1000},{"year":"1991","count":9359,"loan_amount":1111},{"year":"1992","count":9072,"loan_amount":987},{"year":"1993","count":9650,"loan_amount":1234},{"year":"1994","count":9858,"loan_amount":1001},{"year":"1995","count":9539,"loan_amount":1008},{"year":"1996","count":9328,"loan_amount":1298},{"year":"1997","count":7925,"loan_amount":876},{"year":"1998","count":7832,"loan_amount":999},{"year":"1999","count":7832,"loan_amount":1007},{"year":"2000","count":7713,"loan_amount":1230},{"year":"2001","count":7631,"loan_amount":1500},{"year":"2002","count":7771,"loan_amount":1432},{"year":"2003","count":8121,"loan_amount":1590},{"year":"2004","count":8853,"loan_amount":1789},{"year":"2005","count":8848,"loan_amount":1309},{"year":"2006","count":8886,"loan_amount":2123},{"year":"2007","count":8610,"loan_amount":1230},{"year":"2008","count":8388,"loan_amount":981},{"year":"2009","count":8124,"loan_amount":1902},{"year":"2010","count":7945,"loan_amount":1876},{"year":"2011","count":7676,"loan_amount":1992},{"year":"2012","count":7400,"loan_amount":1864},{"year":"2013","count":7190,"loan_amount":1872}]}}}'
    }
  }
};

describe('loads data from the correct path', function() {
  var request;
  var callback;

  beforeEach(function() {
    jasmine.Ajax.install();

    callback = jasmine.createSpy('callback');

    getJSON('data/bank/type/state/data.json', callback);

    request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toBe('data/bank/type/state/data.json');
    expect(request.method).toBe('GET');
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  describe('success', function() {
    beforeEach(function() {
      request.respondWith(response);
    });
    it('response is success', function() {
      expect(callback).toHaveBeenCalled();
      expect(callback).toHaveBeenCalledWith(response.responseText);
    });
  });
});
