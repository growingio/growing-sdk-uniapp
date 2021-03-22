//
//  GrowingIOTrackProxy.m
//  GrowingIOUniplugin
//
//  Created by cpacm on 2021/3/18.
//

#import <Foundation/Foundation.h>
#import "GrowingIOTrackProxy.h"

@implementation GrowingIOTrackProxy

- (void)onCreateUniPlugin {
    NSLog(@"UniPluginProtocol Func: %@,%s",self,__func__);
}

- (BOOL)application:(UIApplication *_Nullable)application didFinishLaunchingWithOptions:(NSDictionary *_Nullable)launchOptions {
    [Growing startWithAccountId:@"9a7f70313f66fb62"];
    [Growing setEnableLog:true];
    return YES;
}

- (void)applicationWillResignActive:(UIApplication * _Nullable)application {
    NSLog(@"UniPluginProtocol Func: %@,%s",self,__func__);
}

- (void)applicationDidBecomeActive:(UIApplication *_Nullable)application {
    NSLog(@"UniPluginProtocol Func: %@,%s",self,__func__);
}

- (void)applicationDidEnterBackground:(UIApplication *_Nullable)application {
    NSLog(@"UniPluginProtocol Func: %@,%s",self,__func__);
}

- (void)applicationWillEnterForeground:(UIApplication *_Nullable)application {
    NSLog(@"UniPluginProtocol Func: %@,%s",self,__func__);
}

- (void)applicationWillTerminate:(UIApplication *_Nullable)application {
    NSLog(@"UniPluginProtocol Func: %@,%s",self,__func__);
}


- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options{
    if ([Growing handleUrl:url]) {
        return YES;
    }
    return NO;
}


@end

