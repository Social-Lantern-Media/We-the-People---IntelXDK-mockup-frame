(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         
        
        
        
    /* button  Home */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         activate_subpage("#uib_Hub"); 
    });
    
        /* button  Contact Us */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         activate_subpage("#uib_Contact"); 
    });
    
        /* button  Donate */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         activate_subpage("#uib_Donate"); 
    });
    
        /* button  Profile */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         activate_subpage("#uib_ProfileDefault"); 
    });
    
        /* graphic button  Candidate Leaderboard */
    
    
        /* graphic button  Candidate Leaderboard */
    $(document).on("click", ".uib_w_45", function(evt)
    {
         activate_subpage("#uib_Leaderboard"); 
    });
    
        /* graphic button  Suggest a Candidate */
    $(document).on("click", ".uib_w_46", function(evt)
    {
         activate_subpage("#uib_Suggest"); 
    });
    
        /* graphic button  Vote for a Candidate */
    $(document).on("click", ".uib_w_47", function(evt)
    {
         activate_subpage("#uib_Vote"); 
    });
    
        /* graphic button  Find a Candidate */
    
    
        /* button  New Register ? */
    $(document).on("click", ".uib_w_41", function(evt)
    {
         activate_subpage("#uib_ProfileRegister"); 
    });
    
        /* graphic button  Find a Candidate */
    $(document).on("click", ".uib_w_48", function(evt)
    {
         activate_subpage("#uib_SearchDefault"); 
    });
    
        /* button  Search */
    $(document).on("click", ".uib_w_64", function(evt)
    {
         activate_subpage("#uib_SearchResults"); 
    });
    
        /* listitem  Person 1 */
    $(document).on("click", ".uib_w_104", function(evt)
    {
         activate_subpage("#uib_BiosTemplate"); 
    });
    
        /* listitem  Person 2 */
    $(document).on("click", ".uib_w_105", function(evt)
    {
         activate_subpage("#uib_BiosTemplate"); 
    });
    
        /* listitem  Person 3 */
    $(document).on("click", ".uib_w_106", function(evt)
    {
         activate_subpage("#uib_BiosTemplate"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
