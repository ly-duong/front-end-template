var test = 'test';
var dog = 'dog';
var cat = 'cat';
var wonton = 'wonton';
var tandy = 'tandy';
var ghost = 'ghost is here. woo. Yeah.';
function testUtil(){
    console.log('Utils file loaded.')
    return 2;
}
testUtil();

var Utils = { 
    "getcareerinfo" : function() {
    return [
        {"descriptor": "Org Level/DTE", "text": "Digital Delivery Applied Intelligence"},
        {"descriptor": "Role", "text": "Business Intelligence Analyst"},
        {"descriptor": "Talent Segment", "text": "Business & Technology Integration"},
        {"descriptor": "Career Track", "text": "Client & Market"}
    ];
    }
};