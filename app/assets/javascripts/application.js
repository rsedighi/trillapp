// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.datepicker
//= require jquery.turbolinks
//= require jquery.ui.all
//= require jobs
//= require fancybox
//= require jquery-fileupload
//= require_tree .

$(document).on("ready page:change", function() {
  $('.fancybox').fancybox({type: 'ajax'});
});

$(document).on("ready page:change", function() {
  $('.fancy-calendar').fancybox({type: 'ajax'});
});

$(function(){

$('#notice').fadeOut(5000);

  var availableCompanies = [
  "Big Fish",
  "DocuSign",
  "PicMonkey",
  "Redfin",
  "Julep",
  "Puppet Labs",
  "INRIX",
  "Moz",
  "Avalara",
  "PayScale",
  "creativeLIVE",
  "HasOffers",
  "Bungie",
  "Groundspeak",
  "WhitePages",
  "Porch.com",
  "Cheezburger Network",
  "Trupanion",
  "WildTangent",
  "Simply Measured",
  "Chef",
  "Apptio",
  "Avvo",
  "Smartsheet",
  "Intelius",
  "FlowPlay",
  "Urban Airship",
  "Z2",
  "AudienceScience",
  "Impinj",
  "TalentWise",
  "Root Metrics",
  "Blue Origin",
  "Sporcle",
  "Visible Technologies",
  "Acumatica",
  "Winshuttle",
  "Donuts Inc.",
  "UIEvolution",
  "GreenCupboards (etailz)",
  "Visible.net",
  "Sesame Communications",
  "Booktrope",
  "Airbiquity",
  "Glympse",
  "ExtraHop Networks",
  "Planetary Resources",
  "Mixpo",
  "Ritani",
  "Limeade",
  "FiftyThree",
  "PitchBook",
  "Dwellable",
  "Dreambox Learning",
  "ecomom (etailz)",
  "DomainTools",
  "Zumobi",
  "Daptiv",
  "Bonanza",
  "Point Inside",
  "MangoSpring",
  "LiquidPlanner",
  "Skytap",
  "Rover.com",
  "RealSelf",
  "Mercent",
  "BitTitan, Inc.",
  "Panopto",
  "IndieFlix",
  "DataSphere",
  "Her Interactive",
  "Blue Box",
  "Killer Infographics",
  "Zonar Systems",
  "Edifecs",
  "BuddyTV",
  "Audiosocket",
  "Motiga",
  "Socrata",
  "Zooppa",
  "BigDoor",
  "EveryMove",
  "Survey Analytics",
  "Duxter",
  "Haiku Deck",
  "Qliance",
  "Yapta",
  "iLink Systems",
  "Spoken Communications",
  "LexBlog",
  "Symform",
  "Crown Social",
  "SeniorHomes.com",
  "EnergySavvy",
  "Tagboard",
  "OneWed",
  "SquareHub",
  "Gratafy",
  "Optimum Energy",
  "Pirq",
  "Leafly",
  "Tango Card",
  "Zipwhip",
  "Taqtile",
  "Tatango",
  "Institute for Corporate Productivity",
  "Doxo",
  "Walk Score",
  "Blue Kangaroo (ChoozOn)",
  "Project Bionic",
  "Runic Games",
  "Estately",
  "Goblinworks",
  "47 Degrees",
  "Bizible",
  "Exo Labs, Inc.",
  "Buddy",
  "Uber Entertainment",
  "General Biodiesel",
  "Placed",
  "Powerit Solutions",
  "Apptentive",
  "Bag Borrow or Steal",
  "iSpot.tv",
  "Zipline Games",
  "Chronus Corporation",
  "Jobaline",
  "Pure Home",
  "Bill4Time",
  "Venuelabs",
  "ClassifiedAds.com",
  "Fun Bits Interactive",
  "AuctionEdge",
  "Rational Interaction",
  "Pathable",
  "Uhuru Software",
  "Hointer",
  "Judy's Book",
  "Indix",
  "Concurix",
  "Lighter Capital",
  "Front Desk",
  "L4 Mobile",
  "SNUPI Technologies",
  "DNA Response",
  "Onehub",
  "Context Relevant",
  "Mobilize.Net",
  "Flash Volunteer",
  "Benefitalign",
  "Kymeta",
  "Comr.se",
  "Entomo",
  "Finsphere",
  "Pikaba",
  "evenues",
  "Add3",
  "iClick",
  "GoToTags",
  "Heapsylon",
  "RescueTime",
  "Shiftboard",
  "Kepion Inc.",
  "Adaptive Biotechnologies",
  "GIVINGtrax",
  "Nimia",
  "Flowroute",
  "PlaceFull",
  "Conenza",
  "BrandVerity",
  "MigrationWiz.com",
  "Apple Pie",
  "NeuroVista",
  "SpaceCurve",
  "SkyKick",
  "Guppy Games",
  "Full Slate",
  "Blab",
  "BigOven",
  "Korrio",
  "Cascade Game Foundry",
  "VoloMetrix",
  "Dinerware",
  "OneEnergy Renewables",
  "Formotus",
  "Browsium",
  "IMPREV",
  "Zoomingo",
  "Vioguard",
  "Handyguyz.com",
  "Demand Energy Networks, Inc",
  "Flowboard",
  "MiKandi (nsfw)",
  "Carena",
  "Healthentic",
  "Illumagear",
  "Freak'n Genius",
  "iCopyright",
  "Calico Energy",
  "Viableware"
  ];

  $('body').on('click', '#company_id', function() {
    $(this).autocomplete({source: availableCompanies});
    $('.ui-autocomplete').css('z-index', 99999999999999);
  });




  $('body').on('focus', '#show_up', function() {
    $(this).datepicker({dateFormat: "yy-mm-dd"});
  });
})
