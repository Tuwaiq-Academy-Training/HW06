
//Each user has one account(1-1)
let InHouse_App=[{login_signup:{InHouse_UserName:"string",
                                 get_Email:"string",
                                 get_PassWord:"string",
                                 login_attempt:"boolean",
                                 signup_status:"boolean",
                                 user_id: "string"},
    //Each user can send Many messeges(1-M)
                    messege:{messege_id:"number",
                             messege_date:"number",
                             messege_content:"string",
                             messege_status:"boolean"},
//Many Senders send Many messeges to each others.(M-M)
                    sender:{sender_id:"string",
                            reciever_id:"string",
                            messege_id:"number",
                            sender_messege:"string"},
//Many recievers recieve Many Messeges from Many Senders.(M-M)
                    reciever:{reciever_id:"string",
                              sender_id:"string",
                              messege_id:"number",
                               reciver_messege:"string"},
//Many users can create assigned mention and reviewRequest many repos.
                    reposetries:[{pull_repo:[{create_repo:
                                            {visibility:{private_repo,public_repo},
                                             orgnization:{filterByorgnization , filterByorgnizationowner},
                                            sort:[{sortByNewest},
                                                {sortByOldest},
                                                {sortByMostCommented},
                                                {sortByleastCommented},
                                            {recentlyUpdated},
                                        {leastRecentlyUpdated}]}}],

                                            {repo_assigned:[{visibility:{private_repo,public_repo},
                                                orgnization:{filterByorgnization , filterByorgnizationowner},
                                               sort:[{sortByNewest},
                                                   {sortByOldest},
                                                   {sortByMostCommented},
                                                   {sortByleastCommented},
                                               {recentlyUpdated},
                                           {leastRecentlyUpdated}]}]},
                                       
                                       
                                                {repo_mentioned:[{visibility:{private_repo,public_repo},
                                                    orgnization:{filterByorgnization , filterByorgnizationowner},
                                                   sort:[{sortByNewest},
                                                       {sortByOldest},
                                                       {sortByMostCommented},
                                                       {sortByleastCommented},
                                                   {recentlyUpdated},
                                               {leastRecentlyUpdated}]}   ]},              
                                            
                                                    {repo_reviewRequest:[{visibility:{private_repo,public_repo},
                                                        orgnization:{filterByorgnization , filterByorgnizationowner},
                                                       sort:[{sortByNewest},
                                                           {sortByOldest},
                                                           {sortByMostCommented},
                                                           {sortByleastCommented},
                                                       {recentlyUpdated},
                                                   {leastRecentlyUpdated}]}]},
                                            
                                            
                                            {repo_issues:[{create_repo:
                                                {visibility:{private_repo,public_repo},
                                                 orgnization:{filterByorgnization , filterByorgnizationowner},
                                                sort:[{sortByNewest},
                                                    {sortByOldest},
                                                    {sortByMostCommented},
                                                    {sortByleastCommented},
                                                {recentlyUpdated},
                                            {leastRecentlyUpdated}]}},
    
                                                {repo_assigned:[{visibility:{private_repo,public_repo},
                                                    orgnization:{filterByorgnization , filterByorgnizationowner},
                                                   sort:[{sortByNewest},
                                                       {sortByOldest},
                                                       {sortByMostCommented},
                                                       {sortByleastCommented},
                                                   {recentlyUpdated},
                                               {leastRecentlyUpdated}]}]},
                                           
                                           
                                                    {repo_mentioned:[{visibility:{private_repo,public_repo},
                                                        orgnization:{filterByorgnization , filterByorgnizationowner},
                                                       sort:[{sortByNewest},
                                                           {sortByOldest},
                                                           {sortByMostCommented},
                                                           {sortByleastCommented},
                                                       {recentlyUpdated},
                                                   {leastRecentlyUpdated}]}}]
                                            
                                            }]}]