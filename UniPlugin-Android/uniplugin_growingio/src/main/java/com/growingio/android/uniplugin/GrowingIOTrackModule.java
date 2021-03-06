package com.growingio.android.uniplugin;

import android.support.annotation.Nullable;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import java.util.Map;

import com.alibaba.fastjson.JSONObject;

import org.json.JSONException;

import com.growingio.android.sdk.collection.GrowingIO;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.common.UniModule;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;

public class GrowingIOTrackModule extends UniModule {

    private static final String TAG = "GrowingIOWeex";

    private String trackPage = "";

    public GrowingIOTrackModule() {
        super();
    }

    @UniJSMethod
    public void track(@Nullable Map<String, Object> params) {
        UniJSCallback callback = null;
        if (isEmpty(params)) {
            failCallback(callback, "[track]Argment can not be empty!");
            return;
        }

        if (!params.containsKey("eventId")) {
            failCallback(callback, "[track] \"eventId\" do not exist!");
            return;
        }
        if (!(params.get("eventId") instanceof String)) {
            failCallback(callback, "[track]The value of the key \"eventId\" must be String type!");
            return;
        }
        if (!params.containsKey("number") && !params.containsKey("eventLevelVariable")) {
            GrowingIO.getInstance().track((String) params.get("eventId"));
            return;
        }

        Object eventLevelVariable = params.get("eventLevelVariable");
        if (params.containsKey("number")) {
            if (!(params.get("number") instanceof Number)) {
                failCallback(callback, "[track]The value of the key \"number\" must be Number type!");
                return;
            }
            if (eventLevelVariable == null) {
                GrowingIO.getInstance().track((String) params.get("eventId"), (Number) params.get("number"));
                return;
            } else {
                if (!(eventLevelVariable instanceof JSONObject)) {
                    failCallback(callback, "[track]The value of the key \"eventLevelVariable\" must be JSONObject type!");
                    return;
                }
                GrowingIO.getInstance().track((String) params.get("eventId"), (Number) params.get("number"), toOrgJSONObject((JSONObject) eventLevelVariable));
                return;
            }
        }

        if (eventLevelVariable != null) {
            if (!(eventLevelVariable instanceof JSONObject)) {
                failCallback(callback, "[track]The value of the key \"eventLevelVariable\" must be JSONObject type!");
                return;
            }
            GrowingIO.getInstance().track((String) params.get("eventId"), toOrgJSONObject((JSONObject) eventLevelVariable));
        }
    }

    @UniJSMethod
    public void page(@Nullable String pageName) {
        UniJSCallback callback = null;
        if (TextUtils.isEmpty(pageName)) {
            failCallback(callback, "[page]Page name can not be empty!");
            return;
        }
        this.trackPage = pageName;
        GrowingIO.getInstance().trackPage(pageName);
    }

    //@UniJSMethod
    public void setPageVariable(@Nullable String pageName, @Nullable Map<String, Object> pageLevelVariables) {
        UniJSCallback callback = null;
        if (TextUtils.isEmpty(pageName) || (!TextUtils.isEmpty(trackPage) && !pageName.equals(trackPage))) {
            failCallback(callback, "[setPageVariable]Page name can not be empty! or Need to call page first!");
            return;
        }
        org.json.JSONObject jsonObject = praseJsonObject(pageLevelVariables, callback);
        if (jsonObject == null) {
            return;
        }
        GrowingIO.getInstance().setPageVariable(pageName, jsonObject);
    }

    @UniJSMethod
    public void setVisitor(@Nullable Map<String, Object> visitor) {
        org.json.JSONObject jsonObject = praseJsonObject(visitor, null);
        if (jsonObject == null) {
            return;
        }
        GrowingIO.getInstance().setVisitor(jsonObject);
    }

    @UniJSMethod
    public void setEvar(@Nullable Map<String, Object> conversionVariables) {
        UniJSCallback callback = null;
        org.json.JSONObject jsonObject = praseJsonObject(conversionVariables, callback);
        if (jsonObject == null) {
            return;
        }
        GrowingIO.getInstance().setEvar(jsonObject);
    }

    @UniJSMethod
    public void setPeopleVariable(@Nullable Map<String, Object> peopleVariables) {
        UniJSCallback callback = null;
        org.json.JSONObject jsonObject = praseJsonObject(peopleVariables, callback);
        if (jsonObject == null) {
            return;
        }
        GrowingIO.getInstance().setPeopleVariable(jsonObject);
    }

    @UniJSMethod
    public void setUserId(@Nullable String userId) {
        UniJSCallback callback = null;
        if (TextUtils.isEmpty(userId)) {
            failCallback(callback, "[setUserId]User Name can not be empty!");
            return;
        }
        GrowingIO.getInstance().setUserId(userId);
    }

    @UniJSMethod
    public void clearUserId(@Nullable UniJSCallback callback) {
        GrowingIO.getInstance().clearUserId();
    }

    public void successCallback(@Nullable UniJSCallback callback, String msg) {
        if (callback != null) {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("result", "success");
            jsonObject.put("info", msg);
            callback.invoke(jsonObject);
        }
    }

    public void failCallback(@Nullable UniJSCallback callback, String msg) {
        if (callback != null) {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("result", "error");
            jsonObject.put("info", msg);
            callback.invoke(jsonObject);
        }
        Log.e(TAG, "failed: " + msg);
    }

    /**
     * ???aliJson????????? Org???JSONObject
     */
    @Nullable
    static org.json.JSONObject toOrgJSONObject(com.alibaba.fastjson.JSONObject aliJson) {
        if (aliJson == null) {
            return null;
        }
        String jsonString = aliJson.toJSONString();
        try {
            return new org.json.JSONObject(jsonString);
        } catch (JSONException e) {
            return null;
        }
    }

    private boolean isEmpty(Map<?, ?> map) {
        return map == null || map.isEmpty();
    }

    private org.json.JSONObject praseJsonObject(Map<String, Object> vars, UniJSCallback callback) {
        org.json.JSONObject jsonObject = new org.json.JSONObject();
        if (isEmpty(vars)) {
            return jsonObject;
        }
        for (String key : vars.keySet()) {
            Object value = vars.get(key);
            try {
                jsonObject.putOpt(key, value);
            } catch (JSONException e) {
                failCallback(callback, e.getMessage());
                return null;
            }
        }
        return jsonObject;
    }

    @UniJSMethod(uiThread = true)
    public void printLog(String msg) {
        Toast.makeText(mWXSDKInstance.getContext(), msg, Toast.LENGTH_SHORT).show();
    }
}
